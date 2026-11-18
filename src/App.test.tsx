import { flush } from 'solid-js';
import { render } from '@solidjs/web';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import { actions } from './utils';

// The store is a module singleton, so each test mounts a fresh App and resets
// the shared state afterwards.
let div: HTMLDivElement;
let dispose: () => void;

const count = () => div.querySelector('sup')?.textContent;
const radios = () => [...div.querySelectorAll('[role="radio"]')];
const checked = () =>
  radios()
    .filter(r => r.getAttribute('aria-checked') === 'true')
    .map(r => r.getAttribute('title'));
const click = (el: Element | null | undefined) => {
  (el as HTMLElement).click();
  flush();
};

beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  dispose = render(App, div);
});

afterEach(() => {
  dispose();
  div.remove();
  actions.reset();
  actions.updatePick('bada55');
  flush();
});

describe('App', () => {
  it('renders without crashing', () => {
    expect(div.textContent).toContain('tinker sld');
    expect(count()).toBe('0');
  });

  it('renders the colour picker with exactly one colour checked', () => {
    expect(radios()).toHaveLength(17);
    expect(checked()).toEqual(['bada55']);
    // Solid 2.0 drops boolean attributes when false, so every radio must carry
    // an explicit string value for screen readers.
    radios().forEach(r =>
      expect(['true', 'false']).toContain(r.getAttribute('aria-checked')),
    );
  });

  it('refresh increments the count, and reset clears it', () => {
    click(div.querySelector('[aria-label="Refresh"]'));
    expect(count()).toBe('1');
    click(div.querySelector('[aria-label="Refresh"]'));
    expect(count()).toBe('2');
    click(div.querySelector('[aria-label="Reset"]'));
    expect(count()).toBe('0');
  });

  it('picking a colour moves the selection', () => {
    click(div.querySelector('[role="radio"][title="aqua"]'));
    expect(checked()).toEqual(['aqua']);
    expect(div.textContent).toContain('aqua');
  });
});
