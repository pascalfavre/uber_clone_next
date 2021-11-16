import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../data/carList'

function RideSelector() {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more.</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <ServiceSection>{car.service}</ServiceSection>
                            <TimeSection>5 min away</TimeSection>
                        </CarDetails>
                        <PriceSection>22.00$</PriceSection>
                    </Car>
                )) }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div``

const Car = tw.div`
    flex p-4 items-center overflow-y
`

const CarDetails = tw.div`
    flex-1
`

const PriceSection = tw.div`
    text-sm
`

const ServiceSection = tw.div`
    font-medium
`

const TimeSection = tw.div`
    text-xs text-blue-500
`

const CarImage = tw.img`
    h-14 mr-4
`

const Wrapper = tw.div`
    flex flex-1 flex-col overflow-scroll
`
