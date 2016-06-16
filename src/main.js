export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-ui-virtualization')

        .feature('features');

    aurelia.start().then(app => app.setRoot());
}
