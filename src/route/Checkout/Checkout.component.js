import ContentWrapper from "Component/ContentWrapper";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ProgressBar } from "Component/ProgressBar/ProgressBar.component";
import "./Checkout.extension.style";

class Checkout extends SourceCheckout {
  renderProgressBar() {
    const {
      stepMap,
      props: { checkoutStep },
    } = this;
    return <ProgressBar steps={stepMap} activeStep={checkoutStep} />;
  }
  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
