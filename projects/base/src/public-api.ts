/*
 * Public API Surface of base
 */

export * from './lib/modules/icon.module';

export * from './lib/services/game-form/game-form.service';
export * from './lib/services/dynamic-component-loader/dynamic-component-loader.service';
export * from './lib/services/dynamic-component-loader/dynamic-component-loader.module';
export * from './lib/services/board/board.service';

export * from './lib/interfaces/i-add';
export * from './lib/interfaces/i-experience';
export * from './lib/interfaces/i-friend';
export * from './lib/interfaces/i-join';
export * from './lib/interfaces/i-start-game';
export * from './lib/interfaces/i-me';
export * from './lib/interfaces/i-start-options';
export * from './lib/interfaces/i-start-player';
export * from './lib/interfaces/i-stranger';
export * from './lib/interfaces/i-start-team';
export * from './lib/interfaces/i-start-team-config';
export * from './lib/interfaces/i-user';
export * from './lib/interfaces/i-bindable-target';
export * from './lib/interfaces/i-hex-size';

export * from './lib/dialogs/dialog.module';
export * from './lib/dialogs/dialog.service';
export * from './lib/dialogs/dialog-data';
export * from './lib/dialogs/authentication/authentication-dialog.module';
export * from './lib/dialogs/authentication/authentication-dialog';
export * from './lib/dialogs/add-player/add-player-dialog.module';
export * from './lib/dialogs/add-player/add-player-dialog';

export * from './lib/components/start-game/start-game.component';
export * from './lib/components/start-game/start-game.module';
export * from './lib/components/join-game/join-game.component';
export * from './lib/components/join-game/join-game.module';
export * from './lib/components/option-title/option-title.component';
export * from './lib/components/option-title/option-title.module';
export * from './lib/components/choose-player/choose-player.component';
export * from './lib/components/choose-player/choose-player.module';
export * from './lib/components/rules/rules.component';
export * from './lib/components/rules/rules.module';
export * from './lib/components/test/test.component';
export * from './lib/components/test/test.module';

export * from './lib/directives/bind-element/bind-element.module';

export * from './lib/test-data/test-mes';
export * from './lib/test-data/test-games';

export * from './lib/classes/state-store';
export * from './lib/classes/move-log';

export * from './lib/classes/base-game';
export * from './lib/classes/base-board';
export * from './lib/classes/base-territory';
export * from './lib/classes/base-team';
export * from './lib/classes/i-game-data';
export * from './lib/classes/i-base-move';
export * from './lib/classes/player';
export * from './lib/classes/base-grid-board';
export * from './lib/classes/base-grid-territory';
export * from './lib/classes/hex-helper';
export * from './lib/classes/base-map-board';
export * from './lib/classes/base-map-territory';
