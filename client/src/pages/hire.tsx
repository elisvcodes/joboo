import HirePage from "@/components/pages/hire/HirePage/HirePage";
import StripeWrapper from "@/components/pages/hire/StripeWrapper";

export default function hire() {
  return (
    <StripeWrapper>
      <HirePage />
    </StripeWrapper>
  );
}
