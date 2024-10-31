import InfoPage from "@/components/info-page";

export default function InfoRoute() {
  return (
    <InfoPage
      dom={{
        contentInsetAdjustmentBehavior: "automatic",
        automaticallyAdjustsScrollIndicatorInsets: true,
      }}
    />
  );
}
