import {color, typography, spacing, fontSize} from '../../themes';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT = {
  paddingHorizontal: spacing.small,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.backgroundWhite,
  },
  skipLink: {
    ...BASE_VIEW,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
  },
};

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.palette.white,
  },
  skipLink: {
    ...BASE_TEXT,
    marginTop: 20,
    fontSize: fontSize.body2,
    color: color.palette.primaryColor,
    fontFamily: typography.secondary,
    fontWeight: '600',
  },
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
};
