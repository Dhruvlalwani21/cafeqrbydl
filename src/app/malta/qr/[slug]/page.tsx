import DownloadQrPdfButton from "@/components/qr/QrDownloadButton";
import { getPlace } from "@/lib/review/places";
import { notFound } from "next/navigation";
import React from "react";
 

// A slick, branded QR sticker styled for a cafe/restaurant/club
function QrSticker({
  cafe,
  link,
  slug,
}: {
  cafe: string;
  link: string;
  slug: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-br from-[#f6d365] via-[#fda085] to-[#f6d365]">
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-yellow-400 relative p-8 flex flex-col items-center max-w-xs w-full">
        {/* Decorative Top Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-yellow-300 text-xl to-pink-300 rounded-full p-4 shadow-md border-2 border-white">
          🔮
        </div>
        <div className="mt-8 mb-4 text-center">
          <h2 className="text-lg font-extrabold text-gray-900 tracking-wide drop-shadow-sm">
            Discover Your Fortune
          </h2>
          <p className="text-sm text-gray-600 mt-1 mb-2">{cafe}</p>
        </div>
        <div className="bg-gradient-to-tr from-yellow-100 to-pink-50 rounded-xl p-3 shadow-inner mb-4">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              link
            )}`}
            alt="Scan QR to view your fortune"
            className="rounded-lg border-2 border-yellow-300 shadow-lg"
            width={180}
            height={180}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold text-yellow-900 mb-1">
            Scan this to view your fortune
          </span>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-pink-300 to-yellow-400 mb-1" />
          <span className="text-xs text-gray-500">Let destiny surprise you</span>
        </div>
      </div>

      <DownloadQrPdfButton cafe={cafe} link={link} fileName={slug} />
    </div>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  const url = `https://dhruvlalwani.com/review-demo/${place.slug}`;
  return <QrSticker cafe={place.name} link={url} slug={place.slug} />;
}