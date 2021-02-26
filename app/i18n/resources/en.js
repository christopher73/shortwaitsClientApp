export default {
  welcome: {
    slide1: {
      header: 'Skip the line\nby ordering ahead',
      description:
        'No need to wait in line,\n choose "pick-up" for a faster checkout',
      highlight: 'Reduce your time in crowded places',
    },
    slide2: {
      header: 'Order online\nwith fast delivery',
      description:
        'We make delivery simple and sheaper,\n no extra charges or hidding fees.',
      highlight: 'Shortwaits never collects delivery fees.',
    },
    slide3: {
      header: 'Order from places\nnear you',
      description:
        'We make it simple to find the place you crave.\n Enter your address and let us do the rest',
      highlight: 'Support your local business',
    },
  },
  auth: {
    phoneNumber: 'Phone Number',
    whatsApp: {part1: 'Continue with', part2: 'WhatsApp'},
    sms: 'Continue with SMS',
    info:
      'By tapping "Send confirmation code" above, we will send you an SMS or WhatsApp message to comfirm your phone number. Message & data rates may apply.',
    verifyOTC: {
      header: 'Verify your Phone number',
      description: 'Enter your one time 4 digit PIN code ',
    },
  },
  signin: {
    getUserData: {
      firstName: 'First Name',
      lastName: 'Last Name',
      header: 'Tell us about yourself',
      description:
        'State your full name and services you wish to access with Shortwaits',
      selectServices: 'Select services you care about',
      food: 'Food',
      groceries: 'Groceries',
      healthAndWellness: 'Health &\nWellness',
      personalCare: 'Personal\nCare',
      liquor: 'Liquor',
      others: 'Others',
    },
    getLocation: {
      header: 'Hi, nice to meet you!',
      description: 'Choose your location to start finding business around you.',
    },
  },
  actions: {
    next: 'Next',
    skip: 'Skip >>',
    continue: 'Continue',
    getStarted: 'Get Started',
    verifyNow: 'Verify Now',
    useCurrentLocation: 'Use current location',
    selectManually: 'Select it manually',
    submit: 'Submit',
  },
  example: {
    helloUser: 'I am a fake user, my name is {{name}}',
    labels: {
      userId: 'Enter a user id',
    },
  },
};

/**
 *
 * HOW to use variables
 *
 * helloUser: 'I am a fake user, my name is {{name}}',
 * <Text style={Fonts.textRegular}>
 * {t('example.helloUser', { name: user.name })}
 * </Text>
 *
 */
