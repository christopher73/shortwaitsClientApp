import {color, typography, spacing, fontSize} from '../../themes';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

/**
 * All text will start off looking like this.
 */
const BASE_VIEW = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
  height: 45,
  borderRadius: 7,
  justifyContent: 'center',
  alignItems: 'center',
  width: width * 0.82,
  marginBottom: spacing.large,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.primaryColor,
  },
  whatsapp: {
    ...BASE_VIEW,
    backgroundColor: color.palette.whatsApp,
    flexDirection: 'row',
    // marginBottom: spacing.large,
  },
  location: {
    ...BASE_VIEW,
    backgroundColor: color.transparent,
    borderColor: color.palette.primaryColor,
    borderWidth: 2,
    flexDirection: 'row',
    marginVertical: spacing.medium,
  },
  sms: {
    ...BASE_VIEW,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderWidth: 1.2,
    borderColor: color.palette.iconsColor,
    flexDirection: 'row',
    // marginBottom: spacing.large,
  },
  skipLink: {
    ...BASE_VIEW,
    // position: 'absolute',
    width,
    height: spacing.huge,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  welcomeScreen: {
    ...BASE_VIEW,
    backgroundColor: color.palette.primaryColor,
    width: width * 0.6,
  },
  blackLink: {
    ...BASE_VIEW,
  },
  whiteLink: {
    ...BASE_VIEW,
  },
  simpleLink: {
    ...BASE_VIEW,
  },
};

const BASE_TEXT = {
  // paddingHorizontal: spacing.small,
  fontFamily: typography.primary,
  letterSpacing: 0.7,
  color: color.palette.primaryTextColor,
};

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: fontSize.link,
    color: color.palette.secondaryTextColor,
  },
  skipLink: {
    ...BASE_TEXT,
    fontSize: fontSize.body2,
    color: color.palette.primaryColor,
    fontFamily: typography.secondary,
    fontWeight: '600',
  },
  blackLink: {
    ...BASE_TEXT,
    fontSize: fontSize.link,
  },
  whiteLink: {
    ...BASE_TEXT,
    color: color.palette.secondaryTextColor,
    fontSize: fontSize.link,
  },
  whatsApp: {
    ...BASE_TEXT,
  },
  location: {
    ...BASE_TEXT,
    color: color.palette.primaryColor,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: fontSize.link,
  },
  simpleLink: {
    ...BASE_TEXT,
    fontSize: fontSize.link,
    color: color.palette.primaryTextColor,
    textDecorationLine: 'underline',
  },

  // the button uses compoenent text so any changes go to components/text/text.presets
  sms: {
    ...BASE_TEXT,
    fontSize: fontSize.link,
    color: color.palette.secondaryTextColor,
  },
};
