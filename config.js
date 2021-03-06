System.config({
  baseURL: "/banno1/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true,
    "module": "system"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "vendor-bundle.js": [
      "npm:zone.js@0.6.12.js",
      "npm:zone.js@0.6.12/dist/zone.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:reflect-metadata@0.1.2.js",
      "npm:reflect-metadata@0.1.2/Reflect.js",
      "npm:angular2@2.0.0-beta.16/platform/browser.js",
      "npm:angular2@2.0.0-beta.16/src/core/di.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/opaque_token.js",
      "npm:angular2@2.0.0-beta.16/src/facade/lang.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/reflective_exceptions.js",
      "npm:angular2@2.0.0-beta.16/src/facade/exceptions.js",
      "npm:angular2@2.0.0-beta.16/src/facade/exception_handler.js",
      "npm:angular2@2.0.0-beta.16/src/facade/collection.js",
      "npm:angular2@2.0.0-beta.16/src/facade/base_wrapped_exception.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/reflective_key.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/forward_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/reflective_provider.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/provider.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/metadata.js",
      "npm:angular2@2.0.0-beta.16/src/core/reflection/reflection.js",
      "npm:angular2@2.0.0-beta.16/src/core/reflection/reflection_capabilities.js",
      "npm:angular2@2.0.0-beta.16/src/core/reflection/reflector.js",
      "npm:angular2@2.0.0-beta.16/src/core/reflection/reflector_reader.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/reflective_injector.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/injector.js",
      "npm:angular2@2.0.0-beta.16/src/core/di/decorators.js",
      "npm:angular2@2.0.0-beta.16/src/core/util/decorators.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/xhr_impl.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/xhr.js",
      "npm:angular2@2.0.0-beta.16/src/facade/promise.js",
      "npm:angular2@2.0.0-beta.16/core.js",
      "npm:angular2@2.0.0-beta.16/src/core/application_common_providers.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/dynamic_component_loader.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/component_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/component_factory.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/view_utils.js",
      "npm:angular2@2.0.0-beta.16/src/core/application_tokens.js",
      "npm:angular2@2.0.0-beta.16/src/core/render/api.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/change_detection.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/change_detection_util.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/change_detector_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/constants.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/differs/default_keyvalue_differ.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/differs/keyvalue_differs.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/differs/default_iterable_differ.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection/differs/iterable_differs.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/exceptions.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/element.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/view_container_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/profile/profile.js",
      "npm:angular2@2.0.0-beta.16/src/core/profile/wtf_impl.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/element_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/view_type.js",
      "npm:angular2@2.0.0-beta.16/src/facade/async.js",
      "npm:rxjs@5.0.0-beta.6/Observable.js",
      "npm:rxjs@5.0.0-beta.6/util/toSubscriber.js",
      "npm:rxjs@5.0.0-beta.6/symbol/rxSubscriber.js",
      "npm:rxjs@5.0.0-beta.6/util/root.js",
      "npm:rxjs@5.0.0-beta.6/Subscriber.js",
      "npm:rxjs@5.0.0-beta.6/Observer.js",
      "npm:rxjs@5.0.0-beta.6/Subscription.js",
      "npm:rxjs@5.0.0-beta.6/util/UnsubscriptionError.js",
      "npm:rxjs@5.0.0-beta.6/util/errorObject.js",
      "npm:rxjs@5.0.0-beta.6/util/tryCatch.js",
      "npm:rxjs@5.0.0-beta.6/util/isFunction.js",
      "npm:rxjs@5.0.0-beta.6/util/isObject.js",
      "npm:rxjs@5.0.0-beta.6/util/isArray.js",
      "npm:rxjs@5.0.0-beta.6/symbol/observable.js",
      "npm:rxjs@5.0.0-beta.6/operator/toPromise.js",
      "npm:rxjs@5.0.0-beta.6/observable/PromiseObservable.js",
      "npm:rxjs@5.0.0-beta.6/Subject.js",
      "npm:rxjs@5.0.0-beta.6/util/ObjectUnsubscribedError.js",
      "npm:rxjs@5.0.0-beta.6/util/throwError.js",
      "npm:rxjs@5.0.0-beta.6/SubjectSubscription.js",
      "npm:angular2@2.0.0-beta.16/src/core/application_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/console.js",
      "npm:angular2@2.0.0-beta.16/src/core/testability/testability.js",
      "npm:angular2@2.0.0-beta.16/src/core/zone/ng_zone.js",
      "npm:angular2@2.0.0-beta.16/src/core/zone/ng_zone_impl.js",
      "npm:angular2@2.0.0-beta.16/src/core/platform_common_providers.js",
      "npm:angular2@2.0.0-beta.16/src/core/platform_directives_and_pipes.js",
      "npm:angular2@2.0.0-beta.16/src/core/change_detection.js",
      "npm:angular2@2.0.0-beta.16/src/core/debug/debug_node.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/view_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/template_ref.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/query_list.js",
      "npm:angular2@2.0.0-beta.16/src/core/render.js",
      "npm:angular2@2.0.0-beta.16/src/core/zone.js",
      "npm:angular2@2.0.0-beta.16/src/facade/facade.js",
      "npm:angular2@2.0.0-beta.16/src/core/prod_mode.js",
      "npm:angular2@2.0.0-beta.16/src/core/util.js",
      "npm:angular2@2.0.0-beta.16/src/core/metadata.js",
      "npm:angular2@2.0.0-beta.16/src/core/metadata/view.js",
      "npm:angular2@2.0.0-beta.16/src/core/metadata/directives.js",
      "npm:angular2@2.0.0-beta.16/src/core/metadata/di.js",
      "npm:angular2@2.0.0-beta.16/compiler.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/template_ast.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/compiler.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/expression_parser/lexer.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/expression_parser/parser.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/expression_parser/ast.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/schema/dom_element_schema_registry.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/schema/element_schema_registry.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/html_tags.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/dom_adapter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/runtime_compiler.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/interpretive_view.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/view.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/element_injector.js",
      "npm:angular2@2.0.0-beta.16/src/core/linker/debug_context.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/output_interpreter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/ts_emitter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/path_util.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/abstract_emitter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/output_ast.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/dart_emitter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/output_jit.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/util.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/output/abstract_js_emitter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/config.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/identifiers.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/compile_metadata.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/url_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/core/metadata/lifecycle_hooks.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/selector.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/runtime_metadata.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/assertions.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/directive_lifecycle_reflector.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/pipe_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/directive_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/directive_normalizer.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/template_preparser.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/html_parser.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/parse_util.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/html_lexer.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/html_ast.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/style_url_resolver.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/template_parser.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/provider_parser.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/view_compiler.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/view_builder.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/view_binder.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/lifecycle_binder.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/constants.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/event_binder.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_binding.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/expression_converter.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_method.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/property_binder.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/util.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_element.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_query.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_view.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/view_compiler/compile_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/style_compiler.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/shadow_css.js",
      "npm:angular2@2.0.0-beta.16/src/compiler/offline_compiler.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser_common.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/events/hammer_gestures.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/events/hammer_common.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/events/event_manager.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/tools/tools.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/tools/common_tools.js",
      "npm:angular2@2.0.0-beta.16/src/facade/browser.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/title.js",
      "npm:angular2@2.0.0-beta.16/platform/common_dom.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/debug/ng_probe.js",
      "npm:angular2@2.0.0-beta.16/src/core/debug/debug_renderer.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/dom_renderer.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/util.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/dom_tokens.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/shared_styles_host.js",
      "npm:angular2@2.0.0-beta.16/src/animate/animation_builder.js",
      "npm:angular2@2.0.0-beta.16/src/animate/browser_details.js",
      "npm:angular2@2.0.0-beta.16/src/facade/math.js",
      "npm:angular2@2.0.0-beta.16/src/animate/css_animation_builder.js",
      "npm:angular2@2.0.0-beta.16/src/animate/animation.js",
      "npm:angular2@2.0.0-beta.16/src/animate/css_animation_options.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/debug/by.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/events/dom_events.js",
      "npm:angular2@2.0.0-beta.16/src/core/profile/wtf_init.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/xhr_cache.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/testability.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/browser_adapter.js",
      "npm:angular2@2.0.0-beta.16/src/platform/browser/generic_browser_adapter.js",
      "npm:angular2@2.0.0-beta.16/src/platform/dom/events/key_events.js",
      "npm:angular2@2.0.0-beta.16/common.js",
      "npm:angular2@2.0.0-beta.16/src/common/common_directives.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/core_directives.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_plural.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_switch.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_style.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_template_outlet.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_if.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_for.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/ng_class.js",
      "npm:angular2@2.0.0-beta.16/src/common/directives/observable_list_diff.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/radio_control_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_control.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/abstract_control_directive.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/control_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/form_builder.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/model.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/validators.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/validators.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/select_control_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_control_status.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/number_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/checkbox_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/default_value_accessor.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_form.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/shared.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/normalize_validator.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/control_container.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_form_model.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_control_group.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_model.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_form_control.js",
      "npm:angular2@2.0.0-beta.16/src/common/forms/directives/ng_control_name.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/common_pipes.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/i18n_select_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/invalid_pipe_argument_exception.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/i18n_plural_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/replace_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/number_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/facade/intl.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/date_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/slice_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/json_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/lowercase_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/uppercase_pipe.js",
      "npm:angular2@2.0.0-beta.16/src/common/pipes/async_pipe.js"
    ]
  },

  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "angular2": "npm:angular2@2.0.0-beta.16",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "ts": "github:frankwallis/plugin-typescript@4.0.6",
    "typescript": "npm:typescript@1.8.10",
    "zone.js": "npm:zone.js@0.6.12",
    "github:frankwallis/plugin-typescript@4.0.6": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular2@2.0.0-beta.16": {
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.12"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.6.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
