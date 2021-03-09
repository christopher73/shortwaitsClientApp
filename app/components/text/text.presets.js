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
  products: {
    ...BASE,
    fontSize: fontSize.body1,
    color: color.palette.primaryTextColor,
  },
  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: fontSize.body2,
    color: color.palette.primaryTextColor,
  },
  /**
   * A smaller piece of secondard information.
   */
  secondary: {
    ...BASE,
    fontSize: 9,
    color: color.dim,
  },
  link: {
    ...BASE,
    fontSize: fontSize.link,
    color: color.palette.secondaryTextColor,
  },
  info: {
    ...BASE,
    textAlign: 'center',
    width: width * 0.85,
    fontSize: fontSize.info,
    color: color.palette.subtitleTextColor,
    fontFamily: typography.primary,
    fontWeight: '100',
    marginBottom: spacing.large,
  },
  whatsapp: {
    ...BASE,
    fontSize: fontSize.link,
    color: color.palette.secondaryTextColor,
  },
  businessType: {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: 14,
    marginTop: spacing.small,
    color: color.palette.primaryTextColor,
    alignSelf: 'stretch',
    textAlign: 'center',
    // fontWeight: '700',
  },
  deliveryHeader: {
    ...BASE,
    fontSize: fontSize.body1,
    fontWeight: '700',
    color: color.palette.primaryTextColor,
    marginLeft: 10,
  },
};

/**
 * A list of preset names.
 */
