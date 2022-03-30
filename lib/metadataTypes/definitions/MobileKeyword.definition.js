module.exports = {
    bodyIteratorField: 'entry',
    dependencies: ['mobileCode'],
    hasExtended: false,
    idField: 'decodedId',
    keyField: 'keyword',
    nameField: 'keyword',
    restPagination: false, // page size is 50, which should be sufficient in most cases
    type: 'mobileKeyword',
    typeDescription: 'Used for managing subscriptions for Mobile numbers in Mobile Connect',
    typeRetrieveByDefault: true,
    typeName: 'Mobile Keyword',
    fields: {
        id: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        keyword: {
            isCreateable: true,
            isUpdateable: false,
            retrieving: true,
            template: true,
        },
        createdDate: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        lastUpdated: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        startDate: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        endDate: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        createdBy: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        'createdBy.id': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'createdBy.name': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        dipSwitches: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        isInherited: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        decodedId: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        restriction: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        keywordType: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        companyName: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        responseMessage: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        status: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: false,
        },
        'code.code': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: true,
        },
        messages: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.id': {
            isCreateable: true,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.createdDate': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.lastUpdated': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.startDate': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.endDate': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.keywordLimit': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.keywordsUsed': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.codeType': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isShortCode': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.keywordsUsedOther': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isGsmCharacterSetOnly': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isMms': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isStackIndependant': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.supportsConcatenation': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isClientOwned': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.isOwner': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.dipSwitches': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.sendableCountries': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.countryCode': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'code.moEngineVersion': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
    },
};