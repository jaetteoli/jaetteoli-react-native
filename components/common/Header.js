import styled from 'styled-components/native';
import {View, Text, Button, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import WhiteLeftSVG from '../../assets/images/white_left.svg';
import WhiteBellSVG from '../../assets/images/white_bell.svg';
import WhiteCartSVG from '../../assets/images/white_cart.svg';
import DefaultLeftSVG from '../../assets/images/default_left.svg';
import DefaultBellSVG from '../../assets/images/default_bell.svg';
import DefaultCartSVG from '../../assets/images/default_cart.svg';
import XSVG from '../../assets/images/x.svg';
import { useNavigation } from '@react-navigation/native';

const HeaderWrapper = styled.View`
  position: relative;
  display: flex;
  z-index: 100;
  flex-direction: row;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
`

const HeaderRightWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 17px;
`

const HeaderTitleWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
`

export default function Header({ color, backgroundColor, title, left = 1, right = 1, statusBar = 'black'}) {
    const LeftComponent = left === 0 ? EmptyView : left === 1 ? color === 'white' ? WhiteLeft : DefaultLeft : X;
    const BellComponent = right === 1 ? color === 'white' ? WhiteBell : DefaultBell : EmptyView;
    const BasketComponent = right === 1 ? color === 'white' ? WhiteCart : DefaultCart : EmptyView;

    return (
        <View style={{ position: 'relative', backgroundColor: backgroundColor ? backgroundColor : null}}>
            <StatusBar barStyle={statusBar === 'black' ? "dark-content" : 'light-content' } />
            <HeaderWrapper>
                <LeftComponent />
                <HeaderRightWrapper>
                    <BellComponent />
                    <BasketComponent />
                </HeaderRightWrapper>
            </HeaderWrapper>
            <HeaderTitleWrapper>
                <HeaderTitle>{title}</HeaderTitle>
            </HeaderTitleWrapper>
        </View>
    );
}


const DefaultLeft = () => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={() => navigation.pop()}>
        <WithLocalSvg
            width={25}
            height={24}
            asset={DefaultLeftSVG} />
    </TouchableOpacity>
    )
}

const WhiteLeft = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.pop()}>
            <WithLocalSvg
                width={25}
                height={24}
                asset={WhiteLeftSVG}/>
        </TouchableOpacity>
    )
}

const DefaultBell = () => {
    const navigation = useNavigation();
    return (
            <TouchableOpacity>
                <WithLocalSvg
                    width={24}
                    height={24}
                    asset={DefaultBellSVG}/>
            </TouchableOpacity>
        )
}

const WhiteBell = () => {
    const navigation = useNavigation();
    return (
            <TouchableOpacity>
                <WithLocalSvg
                    width={24}
                    height={24}
                    asset={WhiteBellSVG}/>
            </TouchableOpacity>
        )
}

const DefaultCart = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ShopBasketPage')}>
            <WithLocalSvg
                width={24}
                height={24}
                asset={DefaultCartSVG}/>
        </TouchableOpacity>
    )
}

const WhiteCart = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ShopBasketPage')}>
            <WithLocalSvg
                width={24}
                height={24}
                asset={WhiteCartSVG}/>
        </TouchableOpacity>
    )
}

const X = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
            <WithLocalSvg
                width={34}
                height={24}
                asset={XSVG}/>
        </TouchableOpacity>

    )
}

const EmptyView = styled.View`
  width: 24px;
  height: 24px;
`
