from setuptools import setup, find_packages

setup(
    name="hackerlearn",
    version="1.0.0",
    description="Anti-algorithm, high-signal technical learning platform curated from 6,454+ Hacker News recommendations",
    author="Hacker Learn Community",
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "hackerlearn = hackerlearn.cli:main",
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.8",
)
