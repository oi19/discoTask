import React from "react";
import { View, Image, ScrollView } from "react-native"
import Header from "../Header/Header";
import { OfferBannars } from "../OfferBannars/OfferBannars";
import { SectorsAndBrands } from "../sectorsAndBrands/SectorsAndBrands";
import { AdditionalLoans } from "../additionalLoans/AdditionalLoans";
import { OffersList } from "../offerList/OffersList";

import styles from "./styles";

interface props {
    sectors: any,
    brands: any,
    services: any,
    offers: any
}

const RenderHomeScreen = (props: props) => {

    const { sectors, brands, services, offers } = props

    return (
        <>
            <Header
                searchBarVisible={true}
                isLogoVisible={true}
                isLongBackgroundContainer={true}
            />
            <View style={styles.arrowImageContainerStyle}>
                <Image style={styles.arrowImageStyle} source={require('../../../../assets/images/arrows.png')} />
            </View>
            <View style={styles.offerBannarsContainer}>
                <OfferBannars />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: -80 }}>
                <SectorsAndBrands
                    sectors={sectors}
                    brands={brands}
                />
                <AdditionalLoans services={services} />
                <OffersList offers={offers} />
            </ScrollView>
        </>
    )
}

export default RenderHomeScreen