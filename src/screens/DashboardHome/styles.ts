import styled from "styled-components/native";
import {Dimensions} from "react-native";
import {RectButton} from "react-native-gesture-handler";

export const HeaderDashboard = styled.View `
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  width: ${Dimensions.get("window").width - 65}px;
  margin-bottom: 30px;
`

export const TextHeaderDashboard = styled.Text `
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  color: #FBFBFB;
`

export const IconHeaderDashboard = styled(RectButton) `
  width: 100%;
  max-width: 33px;
`

export const ImgIconHeaderDashboard = styled.Image `
  width: 100%;
  max-width: 33px;
`

export const HeaderCard = styled.View `
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
`

export const IconHeaderCard = styled.Image `
    width: 100%;
    max-width: 24px;
`

export const TextHeaderCard = styled.Text `
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: #9B9B9B;
  padding-left: 10px;
`

export const ContentCard = styled.View `
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
`

export const TextLastHistoricBalance = styled.Text `
  font-size: 15px;
  color: #9B9B9B;
  line-height: 18px;
  text-align: left;
  margin-top: 15px;
`

export const TextExpense = styled.Text `
  font-size: 15px;
  color: #9B9B9B;
  line-height: 18px;
  text-align: left;
  margin-top: 25px;
`

export const PlanAccountContentCard = styled.View `
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  border-bottom-color: #878686;
  border-bottom-width: 1px;
  padding-bottom: 25px;
`

export const PlanAccountCard = styled.View `
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
`