import { createCheckPackage } from 'check-package-dependencies';

await createCheckPackage().checkRecommended({}).run();
