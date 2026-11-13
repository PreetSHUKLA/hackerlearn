import os
import sys

def main():
    # If run inside the repo or package
    current_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(current_dir)
    
    # Check if cli.py is in root or if we are packaged
    root_cli = os.path.join(parent_dir, "cli.py")
    if os.path.exists(root_cli):
        # Delegate to root cli.py
        sys.path.insert(0, parent_dir)
        import cli
        cli.main()
    else:
        # Fallback to direct execution
        import subprocess
        subprocess.run([sys.executable, root_cli] + sys.argv[1:])

if __name__ == "__main__":
    main()
