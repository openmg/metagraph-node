import test from 'ava';

import Metagraph from '../src/Metagraph';

let mg;

test.before((t) => {
  mg = new Metagraph();
  t.pass();
});

test('Metagraph', async (t) => {
  const graphs = await mg.getGraphs();
  t.true(graphs.size >= 0);
});
