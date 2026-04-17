"""Generate a QR code for the Rust Koans presentation.

Reads the URL from the CNAME file if it exists, otherwise defaults
to rust-koans.stonecharioteer.com. Uses the ink/parchment color
palette to match the site aesthetic.

Run: uv run generate_qr.py
"""

from pathlib import Path

import qrcode

SCRIPT_DIR = Path(__file__).parent
CNAME_FILE = SCRIPT_DIR / "CNAME"
DEFAULT_DOMAIN = "rust-koans.stonecharioteer.com"

if CNAME_FILE.exists():
    domain = CNAME_FILE.read_text().strip()
else:
    domain = DEFAULT_DOMAIN

url = f"https://{domain}"

INK = (26, 18, 10)           # --ink: #1a120a
RICE_PAPER = (245, 237, 218)  # --rice-paper: #f5edda

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=16,
    border=2,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color=INK, back_color=RICE_PAPER)
out = SCRIPT_DIR / "qr.png"
img.save(out)
print(f"Generated {out} for {url}")
