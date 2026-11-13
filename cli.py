#!/usr/bin/env python3
"""
HACKER LEARN - Terminal Launcher
Run anywhere: hackerlearn
"""

import os
import sys
import socket
import threading
import http.server
import socketserver
import webbrowser
import time

DEFAULT_PORT = 8383

def get_base_dir():
    # If running as package or standalone script
    return os.path.dirname(os.path.abspath(__file__))

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

def find_available_port(start_port=DEFAULT_PORT, max_attempts=20):
    port = start_port
    for _ in range(max_attempts):
        if not is_port_in_use(port):
            return port
        port += 1
    return start_port

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=get_base_dir(), **kwargs)

    def end_headers(self):
        # Enable CORS and disable cache during local dev so changes reflect instantly
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Suppress spammy HTTP 200 GET logs in terminal for a clean UI
        if sys.platform != "win32" or "200" not in str(args):
            pass

BANNER = r"""
  _   _    _    ____ _  _______ ____  _     _____    _    ____  _   _ 
 | | | |  / \  / ___| |/ / ____|  _ \| |   | ____|  / \  |  _ \| \ | |
 | |_| | / _ \| |   | ' /|  _| | |_) | |   |  _|   / _ \ | |_) |  \| |
 |  _  |/ ___ \ |___| . \| |___|  _ <| |___| |___ / ___ \|  _ <| |\  |
 |_| |_/_/   \_\____|_|\_\_____|_| \_\_____|_____/_/   \_\_| \_\_| \_|
"""

def main():
    base_dir = get_base_dir()
    os.chdir(base_dir)
    
    port = DEFAULT_PORT
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    elif is_port_in_use(DEFAULT_PORT):
        print(f"[*] Port {DEFAULT_PORT} is currently busy. Finding alternative...")
        port = find_available_port(DEFAULT_PORT + 1)

    url = f"http://localhost:{port}"

    print(BANNER)
    print("=" * 68)
    print("  ⚡ HACKER LEARN — Anti-Algorithm Technical Learning Platform")
    print("  Curated from 6,454+ HackerTube Videos & 20 Years of Hacker News")
    print("=" * 68)
    print(f"  [+] Local Server:    {url}")
    print(f"  [+] Data Directory:  {base_dir}")
    print(f"  [+] User Progress:   Locally saved in your browser (Zero login needed)")
    print("=" * 68)
    print("  🚀 Launching browser automatically...")
    print("  💡 Press [Ctrl+C] in this terminal to shut down server.")
    print("=" * 68)

    # Start socketserver
    socketserver.TCPServer.allow_reuse_address = True
    try:
        httpd = socketserver.TCPServer(("127.0.0.1", port), QuietHandler)
    except Exception as e:
        print(f"[!] Error binding to port {port}: {e}")
        httpd = socketserver.TCPServer(("", port), QuietHandler)

    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()

    # Open browser slightly after server thread starts
    time.sleep(0.4)
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"[!] Could not open browser automatically: {e}")
        print(f"    Please manually navigate to: {url}")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\n[*] Shutting down Hacker Learn... Progress remains saved locally.")
        httpd.shutdown()
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    main()
