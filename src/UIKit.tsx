import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import faker from 'faker'
import { useTheme } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Avatar,
  Button,
  Txt,
  Space,
  ButtonStatusIssue,
  ButtonRate,
  ButtonCircle,
  ButtonText,
  ButtonLink,
  ButtonMarkDecision,
  ButtonIconCircle,
  ButtonComments,
  ButtonDeveloperSub,
  Star,
  TabDeveloper,
  TabCompany,
  Input,
  Header,
  HeaderMaster,
  Developer,
  CardInfo,
  CardVacancies,
  CardResume,
  CardIssue,
  CardIssueResponce,
  CardIssueResponceSub,
  CardContacts,
  CardCareer,
  CardEducation,
  CardAbout,
  TextError
} from './components'
import { black, white } from './constants'
import {
  userData,
  cardCareer,
  cardContacts,
  cardEducation,
  cardIssueResponce,
  cardVacancies,
  cardIssue,
  cardResume,
  cardInfo
} from './data'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = (): React.ReactElement => {
  const [bool, setBool] = useState(false)
  const { scrollView } = styles
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  const { dark } = useTheme()
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor: dark ? black : white }]}>
        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Avatars" />
          <Space height={30} />
          <Avatar uri={image.avatar()} size="xLarge" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="large" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="medium" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="small" />
          <Space height={60} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Fonts" />
          <Space height={5} />
          <Txt h0 title="H0" />
          <Space height={5} />
          <Txt h1 title="H1" />
          <Space height={5} />
          <Txt h2 title="H2" />
          <Space height={5} />
          <Txt h3 title="H3" />
          <Space height={5} />
          <Txt h4 title="H4" />
          <Space height={5} />
          <Txt h5 title="H5" />
          <Space height={5} />
          <Txt h6 title="H6" />
          <Space height={5} />
          <Txt h7 title="H7" />
          <Space height={5} />
          <Txt h8 title="H8" />
          <Space height={5} />
          <Txt body title="body" />
          <Space height={5} />
          <TextError title="text error" />
          <Space height={60} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} open />
          <Space height={30} />
          <ButtonStatusIssue title={`Closed ${34}`} />
          <Space height={30} />
          <ButtonCircle title="Press me" />
          <Space height={30} />
          <ButtonText title="forgot password?" />
          <Space height={30} />
          <ButtonLink title="link" />
          <Space height={30} />
          <ButtonMarkDecision />
          <Space height={30} />
          <ButtonIconCircle name=":thought_balloon:" />
          <Space height={10} />
          <ButtonIconCircle name=":telephone_receiver:" />
          <Space height={10} />
          <ButtonIconCircle name=":loud_sound:" />
          <Space height={10} />
          <ButtonIconCircle name=":thought_balloon:" />
          <Space height={30} />
          <ButtonComments title="3" />
          <Space height={30} />
          <ButtonRate title="2/433" />
          <Space height={30} />
          <ButtonDeveloperSub title={name.findName()} uri={image.avatar()} rate={String(random.number())} />
          <Space height={30} />
          <Star star={bool} onPress={(): void => setBool(!bool)} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Inputs" />
          <Space height={30} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values): void => Alert.alert(JSON.stringify(values))}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required()
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): React.ReactElement => (
              <>
                <Input
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={(): void => setFieldTouched('email')}
                  placeholder="E-mail"
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={(): void => setFieldTouched('password')}
                  placeholder="Password"
                  touched={touched}
                  errors={errors}
                />
                <Space height={40} />
                <Button title="Sign In" onPress={handleSubmit} />
              </>
            )}
          </Formik>
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Tabs" />
          <Space height={30} />
          <TabDeveloper />
          <Space height={30} />
          <TabCompany />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Headers" />
          <Space height={30} />
          <Header iconLeft="angle-dobule-left" />
          <Space height={30} />
          <HeaderMaster user={userData} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Cards" />
          <Space height={30} />
          <Developer title={name.findName()} uri={image.avatar()} rate="1" />
          <Space height={30} />
          <CardInfo obj={cardInfo} />
          <Space height={30} />
          <CardVacancies obj={cardVacancies} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} bool />
          <Space height={30} />
          <CardIssue obj={cardIssue} />
          <Space height={30} />
          <CardIssueResponce obj={cardIssueResponce} />
          <Space height={30} />
          <CardIssueResponceSub obj={cardIssueResponce} />
          <Space height={30} />
          <CardContacts obj={cardContacts} />
          <Space height={30} />
          <CardCareer obj={cardCareer} />
          <Space height={30} />
          <CardEducation obj={cardEducation} />
          <Space height={30} />
          <CardAbout title={lorem.paragraph()} />
          <Space height={60} />
        </View>

        <Space height={300} />
      </ScrollView>
    </>
  )
}

export default UIKit
