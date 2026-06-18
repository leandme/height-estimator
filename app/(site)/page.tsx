import { Metadata } from "next";
import { Suspense } from "react";
import HeightEstimatorTool from "../components/HeightEstimatorTool";

const title = "Height Estimator AI – Estimate Height from Photo";
const description =
  "Estimate apparent adult height from a full-body photo with confidence and range context using AI. 100% free online app.";

function parseAdId(value: string | undefined) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  const adPlacementIds = {
    top: parseAdId(process.env.EZOIC_AD_TOP_ID),
    middle: parseAdId(process.env.EZOIC_AD_MIDDLE_ID),
    bottom: parseAdId(process.env.EZOIC_AD_BOTTOM_ID),
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <HeightEstimatorTool adPlacementIds={adPlacementIds} />
    </Suspense>
  );
}
