import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Dev Dev',
                    subTitle: 'The Developer',
                    imgSrc: 'https://picsum.photos/200/302',
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Prog',
                    subTitle: 'Programmers of a community',
                    imgSrc: 'https://picsum.photos/200/300',
                    link: 'https://facebook.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Bussiness',
                    subTitle: 'Linkedinn in the in ',
                    imgSrc: 'https://picsum.photos/200/301',
                    link: 'https://instagram.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;
        items.forEach(item => {
            if(item.id!== id ){
                item.selected=false;
            }
        });
        this.setState({
            items: items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className = "justify-content-around">
                {this.makeItems(this.state.items)}
                </Row>
                </Container>
        );
    }
}