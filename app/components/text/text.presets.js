import {Dimensions} from 'react-native';
import {color, typography, fontSize, spacing} from '../../themes';

const width = Dimensions.get('screen').width;
/**
 * All text will start off looking like this.
 */
const BASE = {
  fontFamily: typography.primary,
  color: color.palette.primaryTextColor,
  fontSize: fontSize.body1,
  letterSpacing: 0.7,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,
  bold: {
    ...BASE,
    fontWeight: 'bold',
  },
  header: {
    width: width * 0.85,
    textAlign: 'center',
    color: color.palette.primaryTextColor,
    fontSize: fontSize.title1,
    fontWeight: '700',
    marginTop: spacing.large,
  },
  body1: {
    marginTop: spacing.large,
    width: width * 0.85,
    textAlign: 'center',
    fontSize: fontSize.body2,
    fontWeight: '600',
    fontFamily: typography.secondary,
    color: color.palette.primaryTextColor,
    lineHeight: 22,
  },
  mainHeader: {
    ...BASE,
    fontSize: 35,
    fontWeight: 'bold',
    color: color.palette.secondaryTextColor,
    // marginTop: spacing.huge,
  },
  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {
    ...BASE,
    fontSize: 13,
    color: color.dim,
  },
  /**
   * A smaller piece of secondard information.
   */
  secondary: {
    ...BASE,
    fontSize: 9,
    color: color.dim,
  },
  whatsApp: {
    ...BASE,
    fontSize: fontSize.body2,
    marginHorizontal: 10,
    color: color.palette.secondaryTextColor,
  },
  link: {
    ...BASE,
    fontSize: fontSize.link,
    color: color.palette.secondaryTextColor,
  },
  info: {
    ...BASE,
    width: width * 0.85,
    marginTop: spacing.huge,
    fontSize: fontSize.info,
    color: color.palette.subtitleTextColor,
    fontFamily: typography.primary,
    fontWeight: '100',
  },
};

/**
 * A list of preset names.
 */
