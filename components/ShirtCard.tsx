import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


interface IShirtProps {
    imgUrl: string;
    price: string;
    title: string;
    type: string;
    color: string;
}

interface IShirt {
    data: IShirtProps
}


const ShirtCard: React.FC<IShirt> = ({data}) => {
    const {imgUrl, type,  color, price, title} = data;
    return (
        <View style={styles.CardWrap}>
            <View style={styles.ShirtWrap}>
                <Image style={styles.ShirtImg} source={{uri: imgUrl}} resizeMode="cover" />
            </View>
            <View style={styles.CardBottomWrap}>
                <Text style={styles.TitleTextStyle}>
                     {type} {title} {color && '-' +  color}
                </Text>
                <View style={styles.CardBottom}>
                    <Text style={styles.PriceTextStyle}>
                        {price}
                    </Text>
                    <View style={styles.RatingWrap}>
                        <Image source={require('../assets/images/favorite-star.png')} style={{ width: 10, height: 9.56 }} />
                        <Text style={styles.RatingTextStyle}>
                            4.9
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ShirtCard;

const styles = StyleSheet.create({
    CardWrap: {
        backgroundColor: '#FFFFFF',
        width: 161,
        height: 219,
        borderRadius: 7,
        margin: 10
    },
    ShirtWrap: {
        flex: 6.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ShirtImg: {
        width: 106,
        height: 145,
        alignSelf: 'center'
    },
    CardBottomWrap: {
        flex: 2.5,
        paddingHorizontal: 10
    },
    CardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    TitleTextStyle: {
        fontSize: 13
    },
    PriceTextStyle: {
        fontWeight: '700',
        color: '#000'
    },
    RatingWrap: {
        backgroundColor: '#FF6969',
        padding: 3,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    RatingTextStyle: {
        fontSize: 10,
        color: '#FFFFFF',
        fontWeight: '700',
        marginHorizontal: 3
    }
})