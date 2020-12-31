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
};

const BASE_TEXT = {
  paddingHorizontal: spacing.small,
  letterSpacing: 0.7,
  color: color.palette.secondaryTextColor,
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
  whatsApp: {
    ...BASE_VIEW,
    // marginTop: spacing.huge,
    backgroundColor: color.palette.whatsApp,
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
};

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 16,
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
    color: color.palette.primaryTextColor,
  },
  whiteLink: {
    ...BASE_TEXT,
  },
  whatsApp: {
    ...BASE_TEXT,
  },
};
