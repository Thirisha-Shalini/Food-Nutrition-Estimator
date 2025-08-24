#!/usr/bin/env python3
"""
Simple HTTP server for the Nutrition Estimator
Run: python server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000
DIRECTORY = "."

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    # Check if index.html exists
    if not Path("index.html").exists():
        print("❌ Error: index.html not found!")
        print("📝 Please create index.html with the nutrition estimator code.")
        return
    
    # Start server
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Server starting at http://localhost:{PORT}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print("🔄 Press Ctrl+C to stop the server")
        
        # Auto-open browser
        webbrowser.open(f"http://localhost:{PORT}")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✅ Server stopped!")

if __name__ == "__main__":
    main()