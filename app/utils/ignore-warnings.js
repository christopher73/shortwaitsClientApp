/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  // eslint-disable-next-line quotes
  'Require cycle:',
]);
