import Cards from './Cards';
import cardData from '../data/cards.json';
import Container from './Container';

function CardsSection() {
    return (
        <>
            <Container className="px-[80px]">
                <div className="flex w-full justify-end">
                    <h5 className="font-montserrat  text-gold font-bold text-[28px] leading-[50px] tracking-[0.84px] uppercase">
                        Recent NFT
                    </h5>
                </div>
                <div  className="flex justify-between mt-[32px] flex-wrap" >
                    {cardData.map((card, index) => (
                        <Cards key={index} image={card.image} title={card.name} />
                    ))}
                </div>
            </Container>
        </>
    );
}

export default CardsSection;
