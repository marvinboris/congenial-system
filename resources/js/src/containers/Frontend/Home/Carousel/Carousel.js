import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';

import FirstImage from '../../../../assets/images/482f2140-4473-42e8-85d2-0953eaf84d88.png';
import ThirdImage from '../../../../assets/images/onlinestudents.png';
import FourthImage from '../../../../assets/images/business-bg-3.png';
import BlurImage from '../../../../assets/images/SRTP-abstract-background-19.png';

const items = [
    {
        src: FirstImage,
        altText: 'Slide 1',
    },
    {
        src: BlurImage,
        altText: 'Slide 2',
    },
    {
        src: ThirdImage,
        altText: 'Slide 3',
    },
    {
        src: FourthImage,
        altText: 'Slide 4',
    }
];

class HomeCarousel extends Component {
    state = {
        activeIndex: 0,
        animating: false
    }

    moveCircle = index => {
        setTimeout(() => {
            const top = index * 44;

            $('.circle-carousel-indicator').first().animate({ marginTop: top }, 'fast');
        }, 1);
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    goToIndex = newIndex => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex }, () => this.moveCircle(newIndex));
    }

    render() {
        const slides = items.map(item => (
            <CarouselItem onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} key={item.src} className="h-100">
                <div className="h-100" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(' + item.src + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="h-100" style={{ backgroundImage: 'url(' + BlurImage + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: .63 }}></div>
                </div>
            </CarouselItem>
        ));

        return (
            <Carousel id="carousel" activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} className="h-100 carousel-fade HomeCarousel">
                <CarouselIndicators items={items} activeIndex={this.state.activeIndex} className="d-lg-flex flex-column align-items-center" onClickHandler={this.goToIndex} />

                {slides}

                {this.props.children}
            </Carousel>
        );
    }

}

export default HomeCarousel;
