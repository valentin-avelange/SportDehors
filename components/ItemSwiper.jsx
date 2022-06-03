import Item from "../components/Item";

var React = require('react');
import { v4 as uuidv4 } from "uuid";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Search
 */

export default class ItemSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    disabled: false,
                    image: "images/basketball-logo.svg",
                    name: "Basketball"
                },
                {
                    disabled: false,
                    image: "images/football-logo.svg",
                    name: "Football"
                },
                {
                    disabled: true,
                    image: "images/ping-pong-logo.svg",
                    name: "Ping-Pong"
                },
                {
                    disabled: false,
                    image: "images/tennis-logo.svg",
                    name: "Tennis"
                }
            ]
        }
    }


    render() {
        return (
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    cssMode={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {this.state.items
                        .filter(item => {
                            return this.props.search ? item.name.toLowerCase().includes(this.props.search.toLowerCase()) : true;
                        }).map((item, index) => {
                            return (<SwiperSlide key={uuidv4()}><Item disabled={item.disabled} image={item.image} name={item.name}></Item></SwiperSlide>);
                        })
                    }
                </Swiper>
            </>)
    }

}