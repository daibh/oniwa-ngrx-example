import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    ActionTracking: {}
};

// because the plural of entity
const pluralNames = {
    ActionTracking: 'ActionTrackings'
};

export const entityConfig = {
    entityMetadata,
    pluralNames
};