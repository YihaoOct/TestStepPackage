module.exports = {
    extends: [
        "config:base",
        ":disableMajorUpdates",
        ":ignoreModulesAndTests",
        ":pinVersions",
        ":rebaseStalePrs",
        ":automergeDigest",
        ":automergePatch",
        ":automergePr",
        ":automergeRequireAllStatusChecks",
        ":automergeLinters",
        ":automergeTesters",
        ":automergeTypes",
        "npm:unpublishSafe",
        "packages:eslint",
        "workarounds:typesNodeVersioning",
    ],
    branchPrefix: "renovate/",
    platform: "github",
    repositories: ["OctopusDeploy/step-package-template"],
    packageRules: [],
    timezone: "Australia/Brisbane",
    onboarding: false,
    requireConfig: false,
    prCreation: "not-pending",
    constraints: {
        pnpm: "7.9.5",
    },
};
