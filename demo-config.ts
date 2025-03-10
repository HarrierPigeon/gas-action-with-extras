let INTERNAL_CONFIG = {
    // docIds

    docIds_kicFormId: "KIC_FORM_ID", //The Document ID of the Key Indicators for Conversion Report Google Form (where missionaries submit their KICs every Sunday).    gcopy:'1CbCGdXXjPmQmpLKJAaER0cSYSGrb3ES3y2XGpr3czEw'    live:'1Zc-3omEIjAeQrmUxyG8YFk4PdnPf37XiFy3PRK2cP8g'

    //   docIds_zoneTemplate: "1dKCcClYsNNneA4ty4-EtWg_hJl7BZ-v8Gl-5uPogiHs", //TODO No references - remove?
    //   docIds_distTemplate: "1-y8VnTOqbYiW11nGVVVaC4iNjWE7jOcP2sMFpdzvqTM", //TODO No references - remove?
    //   docIds_areaTemplate: "1TcIlXOnnUr_eXrDLN94tf-DB2A7eqeFBl0-QeNGKXAE", //TODO No references - remove?

    reportCreator: {
        docIDs: {

            zoneTemplate: "ZONE_TEMPLATE_ID",
            distTemplate: "DISTRICT_TEMPLATE_ID",
            areaTemplate: "AREA_TEMPLATE_ID",
        },
        outputDataSheetName: "Data",
        configPageSheetName: "config",
        kicDataStoreSheetName: "Data",
    },

    // general

    general_areaNameQuestionTitle: "Area Name",

    general_deleteOldResponsesAgeLimit: 0, //The max age, in days, of a response before it is deleted (from the Form, not the Google Sheet). If set to 0, old responses will never be deleted.

    // dataFlow

    dataFlow_skipMarkingPulled: false, //Stops marking Form Responses as having been pulled into the data sheet

    dataFlow_skipMarkingDuplicates: false, //TODO Re-implement?

    dataFlow_freezeContactData: false,

    dataFlow_formColumnsToExcludeFromDataSheet: [
        "responsePulled",
        "submissionEmail",
    ],

    dataFlow_forceAreaIdReloadOnUpdateDataSheet: false,

    dataFlow_areaId_cacheExpirationLimit: 1800, //Maximum time in seconds before the cache gets reset

    dataFlow_areaId_cacheKey: "butterflies and clouds", //ID to use when storing areaIDs in the cache

    dataFlow_allSheetData_cacheEnabled: true, //Cache allSheetData, the object returned by constructSheetData()

    dataFlow_allSheetData_cacheExpirationLimit: 1800, //Maximum time in seconds before the cache gets reset

    dataFlow_allSheetData_cacheKey: "puppies and flowers", //ID to use when storing allSheetData in the cache

    dataFlow_missionOrgData_cacheEnabled: false, //[unimplemented] Cache missionOrgData, the object returned by getMissionOrgData()

    dataFlow_maxRowToMarkDuplicates: 500, //If set to -1, the full sheet will be checked (which takes a long time!). If set to 0, duplicates will not be marked.

    commonLib: {
        log_access_info: false, // if set to true, logger will tell you whether or not files are accessible
        log_display_info: false, // if set to true, sendDataToDisplay & sendReportToDisplay will display extra debug information
        log_display_info_extended: false, // if set to true, sendDataToDisplay & sendReportToDisplay will display even more debug information
        log_time_taken: true, // if set to true, sendDataToDisplay & sendReportToDisplay will display how much time they took to run.  Pretty useful IMO
    },

    // fileSystem

    fileSystem_reportLevel: { zone: "Zone", dist: "District", area: "Area" }, //Theoretically, since there's no difference between this anywhere you should be able to change this to be whatever gibberish you want as long as they're unique.  These strings also included in folder naming if INCLUDE_SCOPE_IN_FOLDER_NAME is set to true, so don't make them too pithy.

    fileSystem_updateSheetProtectionsOnLoad: false, //WARNING: If set to true, loading the filesystem will take a VERY long time!

    fileSystem_includeScopeInFolderName: false, // this cannot be set to true until driveHandler includes both the folder name string and the areaname separately.

    fileSystem_freezeFilesys: false, //TODO Re-implement? Currently unimplemented

    filesystem_log_existing_folders: false,
    // logging

    log_filesys: false, //TODO Update references
    fileSystem_log_update: false,

    fileSystem_log_fileShare: false,

    LOG_OLD_sendReportToDisplayV3_: false, //TODO Update references
    fileSystem_log_sendReportToDisplayV3_: false,

    dataFlow_log_importContacts: false,
    dataFlow_log_dataMerge: false,
    dataFlow_log_responsePulled: false,
    dataFlow_log_duplicates: false,

    // triggers
    triggers: {
        installable: {
            onOpen: true,
            onEdit: false // not currently used
        },
        timeBased: {
            updateForm: true,
            updateDataSheet: true,
            importContacts: true,
            updateFileSystem: true,
            updateAreaReports: true,
            updateDistReports: true,
            updateZoneReports: true,
            shareFileSystem: true, // the default for this was false, now that accessControl has been finished, has been set to true.
        },
        menu: {
            updateDataSheet: true,
            updateFileSystem: false,
            updateAreaReports: true,
            updateDistReports: true,
            updateZoneReports: true,
            importContacts: true,
            markDuplicates: true,
            loadAreaIds: true,
        }
    },

};

const CONFIG = {
    ...INTERNAL_CONFIG,
    ...GITHUB_SECRET_DATA
    // this way, all the data written to GITHUB_SECRET_DATA just winds up in config
};