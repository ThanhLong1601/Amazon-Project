import {formatCurrency} from '../../scripts/utils/money.js';

describe('Test suite: formatCurrency ', () => {
  it('Converse cents into dollars', async () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', async  () => {
    expect(formatCurrency(0)).toEqual('0.00');
    
  })

  it('rounds up to the nearest cent', async  () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
    
  })
});