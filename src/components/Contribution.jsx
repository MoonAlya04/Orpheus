import ContributionItems from "./ContributionItems";
import Container from "./Container";
import ContuributionNumTwo from "./ContuributionNumTwo";

function Contribution() {
  return (
    <Container className=" flex flex-col px-[80px] pt-[82px]">
      <div className="flex w-full justify-start mb-[32px]">
        <h5 className="font-montserrat  text-gold font-bold text-[28px] leading-[50px] tracking-[0.84px] uppercase">
          Contribution
        </h5>
      </div>
      <div className="flex flex-col justify-center items-center gap-12">
        <ContributionItems />
        <ContuributionNumTwo />
      </div>
    </Container>

  );
}

export default Contribution;
