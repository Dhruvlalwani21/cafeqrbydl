"use client";

import React, { useState } from "react";

// QR side length in mm for each printable size (all fit on A4)
const SIZES = [
  { label: "Small", qrMm: 60 },
  { label: "Medium", qrMm: 90 },
  { label: "Large", qrMm: 130 },
];

// Gradient pill (yellow -> pink -> yellow), same colors as the on-screen divider
function makeGradientBar(): string {
  const c = document.createElement("canvas");
  c.width = 640;
  c.height = 40;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, c.width, 0);
  g.addColorStop(0, "#facc15"); // yellow-400
  g.addColorStop(0.5, "#f9a8d4"); // pink-300
  g.addColorStop(1, "#facc15");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.roundRect(0, 0, c.width, c.height, c.height / 2);
  ctx.fill();
  return c.toDataURL("image/png");
}

// Round gradient badge with white border and the emoji, drawn with the
// browser's own emoji font (jsPDF fonts can't render emoji)
function makeIconBadge(emoji: string): string {
  const size = 400;
  const border = 16;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d")!;

  // bottom-left -> top-right, like Tailwind's bg-gradient-to-tr
  const g = ctx.createLinearGradient(0, size, size, 0);
  g.addColorStop(0, "#fde047"); // yellow-300
  g.addColorStop(1, "#f9a8d4"); // pink-300
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - border / 2, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.lineWidth = border;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();

  ctx.font = `${size * 0.48}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, size / 2, size / 2 + size * 0.03);
  return c.toDataURL("image/png");
}

export default function DownloadQrPdfButton({
  cafe,
  link,
  fileName,
}: {
  cafe: string;
  link: string;
  fileName: string;
}) {
  const [busy, setBusy] = useState(false);

  async function handleDownload() {
    setBusy(true);
    try {
      const [{ jsPDF }, QRCode] = await Promise.all([
        import("jspdf"),
        import("qrcode").then((m) => m.default),
      ]);

      // High-res QR so it stays sharp at the large size
      const qrData = await QRCode.toDataURL(link, {
        errorCorrectionLevel: "H",
        margin: 1,
        width: 1400,
      });

      const barImg = makeGradientBar();
      const iconImg = makeIconBadge("🔮");

      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const pageW = 210;

      SIZES.forEach((s, i) => {
        if (i > 0) doc.addPage();

        const k = s.qrMm / 90; // scale factor relative to medium
        const pad = 10 * k;
        const titleH = 20 * k;
        const footerH = 18 * k;
        const cardW = s.qrMm + pad * 2;
        const cardH = pad + titleH + s.qrMm + footerH + pad;
        const x = (pageW - cardW) / 2;
        const y = 35; // leaves room for the icon that overlaps the top edge
        const cx = pageW / 2;

        // Page label (outside the cut line)
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(150);
        doc.text(
          `${s.label} - ${s.qrMm / 10} cm QR (sticker ${(cardW / 10).toFixed(
            1
          )} x ${(cardH / 10).toFixed(1)} cm)`,
          cx,
          15,
          { align: "center" }
        );

        // Card: solid yellow border + dashed cut guide just outside
        doc.setDrawColor(250, 204, 21);
        doc.setLineWidth(1.2);
        doc.roundedRect(x, y, cardW, cardH, 6 * k, 6 * k, "S");
        doc.setDrawColor(180);
        doc.setLineWidth(0.2);
        doc.setLineDashPattern([2, 2], 0);
        doc.roundedRect(x - 2, y - 2, cardW + 4, cardH + 4, 7 * k, 7 * k, "S");
        doc.setLineDashPattern([], 0);

        // Title + cafe name
        doc.setTextColor(17, 24, 39);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18 * k);
        doc.text("Discover Your Fortune", cx, y + pad + 7 * k, {
          align: "center",
        });
        doc.setFont("helvetica", "normal");
        doc.setTextColor(75, 85, 99);
        doc.setFontSize(11 * k);
        doc.text(cafe, cx, y + pad + 14 * k, {
          align: "center",
          maxWidth: cardW - pad,
        });

        // QR
        doc.addImage(
          qrData,
          "PNG",
          x + pad,
          y + pad + titleH,
          s.qrMm,
          s.qrMm
        );

        // Footer
        const fy = y + pad + titleH + s.qrMm + 8 * k;
        doc.setFont("helvetica", "bold");
        doc.setTextColor(113, 63, 18);
        doc.setFontSize(12 * k);
        doc.text("Scan this to view your fortune", cx, fy, { align: "center" });

        // Gradient divider
        const barW = 16 * k;
        const barH = 1.2 * k;
        doc.addImage(barImg, "PNG", cx - barW / 2, fy + 3 * k, barW, barH);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(107, 114, 128);
        doc.setFontSize(9 * k);
        doc.text("Let destiny surprise you", cx, fy + 9.5 * k, {
          align: "center",
        });

        // Icon badge straddling the top edge (drawn last so it sits on top)
        const iconD = 16 * k;
        doc.addImage(iconImg, "PNG", cx - iconD / 2, y - iconD / 2, iconD, iconD);
      });

      doc.save(`${fileName}-qr-print.pdf`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={busy}
      className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-700 disabled:opacity-60 print:hidden"
    >
      {busy ? "Preparing PDF..." : "Download printable PDF"}
    </button>
  );
}