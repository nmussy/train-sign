import {ChuoLineRapide as ChuoLineRapid} from './chuo-rapid';
import {YamanoteLine} from './yamanote';
import {YamanoteLinePre2020} from './yamanote-pre-2020';

/*
 Only add lines **after** the last one.
 Changing the order of previous lines will break previous serializations
*/
export const Lines = [YamanoteLine, YamanoteLinePre2020, ChuoLineRapid];
