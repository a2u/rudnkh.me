---
title: "ESO Coffer Calculator"
description: "Decide whether to spend Undaunted keys on mystery (1-key) or curated (8-key) coffers, and which curated to pick."
layout: single
math: true
---

A companion to [ESO Coffer Math](/notes/eso-undaunted-coffer-math/).
Pick the Pledge Master, fill in how many pieces each set has and
how many you still don't own. The table shows the probability
that a single curated of that set hands you a new piece; the panel
underneath compares the best curated bet against 8 mystery pulls (same
8-key cost).

Edits persist locally in your browser per vendor, so you can come back
later and pick up where you left off.

<p class="calc-meta">Vendor lineups current as of 13 June 2026.</p>

<style>
.calc { margin-top: 1.5em; }
.calc-meta { color: var(--fg-muted); font-size: 0.9em; margin: 0.5em 0 1.5em; }
.calc-vendor { margin-bottom: 1em; display: flex; gap: 0.5em; align-items: flex-end; flex-wrap: wrap; }
.calc-vendor label { display: block; flex: 1; min-width: 16em; }
.calc-vendor label > span { display: block; color: var(--fg-muted); font-size: 0.9em; margin-bottom: 0.35em; }
.calc input, .calc-select, .calc-reset { box-sizing: border-box; height: 2.4em; background: transparent; border: 1px solid var(--fg-muted); color: var(--fg); padding: 0 0.7em; font: inherit; border-radius: 3px; line-height: 1.4; }
.calc input:focus, .calc-select:focus, .calc-reset:focus { outline: none; border-color: var(--green); }
.calc input[type=text] { width: 100%; }
.calc input[type=number] { width: 4.5em; text-align: right; -moz-appearance: textfield; appearance: textfield; }
.calc input[type=number]::-webkit-outer-spin-button,
.calc input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.calc-select {
  position: relative;
  width: 100%;
  padding-right: 2.2em;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}
.calc-select.open { border-color: var(--green); }
.calc-select-value { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.calc-select-arrow {
  position: absolute;
  right: 0.85em;
  top: 50%;
  width: 12px;
  height: 8px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform 0.18s ease;
  color: var(--fg-muted);
}
.calc-select.open .calc-select-arrow { transform: translateY(-50%) rotate(180deg); color: var(--green); }
.calc-select-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 0.3em 0;
  list-style: none;
  background: #1a1c25;
  border: 1px solid var(--fg-muted);
  border-radius: 3px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  z-index: 10;
  max-height: 18em;
  overflow-y: auto;
}
.calc-select-menu[hidden] { display: none; }
.calc-select-menu li {
  padding: 0.45em 0.7em 0.45em 2.2em;
  cursor: pointer;
  line-height: 1.4;
  position: relative;
  color: var(--fg);
}
.calc-select-menu li.highlighted { background: rgba(0, 254, 139, 0.08); }
.calc-select-menu li.selected { color: var(--green); }
.calc-select-menu li.selected::before {
  content: '✓';
  position: absolute;
  left: 0.8em;
  color: var(--green);
}
.calc-reset { display: inline-flex; align-items: center; gap: 0.45em; color: var(--fg-muted); cursor: pointer; flex: 0 0 auto; }
.calc-reset:hover { color: var(--fg); border-color: var(--fg); }
.calc-reset svg { width: 1em; height: 1em; flex-shrink: 0; }
.calc-table { width: 100%; border-collapse: collapse; margin: 0.5em 0 1em; }
.calc-table th { color: var(--fg-muted); font-weight: 400; font-size: 0.85em; padding: 0.4em 0.5em; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
.calc-table th.col-num, .calc-table td.col-num { text-align: center; }
.calc-table th.col-pct, .calc-table td.col-pct { text-align: right; padding-right: 0.8em; }
.calc-table td { padding: 0.35em 0.5em; vertical-align: middle; }
.calc-table tbody tr { border-bottom: 1px solid rgba(255,255,255,0.05); }
.calc-table .p-cell { font-variant-numeric: tabular-nums; color: var(--fg); }
.calc-table .p-cell.best { color: var(--green); font-weight: 500; }
.calc-table input[type=number] { text-align: center; }
.calc-table .rm { background: none; border: none; color: var(--fg-muted); cursor: pointer; font-size: 1.2em; line-height: 1; padding: 0 0.3em; }
.calc-table .rm:hover { color: var(--fg); }
.calc-add { background: none; border: 1px dashed var(--fg-muted); color: var(--fg-muted); padding: 0.4em 0.8em; border-radius: 3px; cursor: pointer; font: inherit; }
.calc-add:hover { color: var(--fg); border-color: var(--fg); }
.calc-result { margin-top: 1.5em; padding: 1.2em 1.4em; border-left: 2px solid var(--green); background: rgba(0, 254, 139, 0.03); }
.calc-result-total { color: var(--fg-muted); margin: 0 0 1.4em; }
.calc-result-total strong { color: var(--fg); }
.calc-result-section { margin: 0 0 1.4em; }
.calc-result-section h4 { color: var(--fg-muted); font-size: 0.75em; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.7em; }
.calc-result-section dl { display: grid; grid-template-columns: auto 1fr; column-gap: 1.5em; row-gap: 0.4em; margin: 0; }
.calc-result-section dt { color: var(--fg-muted); margin: 0; }
.calc-result-section dd { margin: 0; color: var(--fg); font-variant-numeric: tabular-nums; }
.calc-result-verdict { padding-top: 1em; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--green); font-weight: 500; }
.calc-result-verdict::before { content: '→ '; }
.calc-result .invalid { color: var(--fg-muted); margin: 0; }
</style>

<div class="calc">
  <div class="calc-vendor">
    <label>
      <span>Pledge Master</span>
      <div class="calc-select" id="calc-vendor" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false"></div>
    </label>
    <button type="button" class="calc-reset" id="calc-reset" title="Reset this vendor to defaults">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.5 2.6"/>
        <polyline points="21 3 21 9 15 9"/>
      </svg>
      <span>Reset</span>
    </button>
  </div>

  <table class="calc-table">
    <thead>
      <tr>
        <th style="width:50%">Set (curated coffer)</th>
        <th class="col-num" style="width:12%">Total</th>
        <th class="col-num" style="width:12%">Unknown</th>
        <th class="col-pct" style="width:18%">P(new)</th>
        <th style="width:8%"></th>
      </tr>
    </thead>
    <tbody id="calc-sets"></tbody>
  </table>

  <button type="button" class="calc-add" id="calc-add">+ Add set</button>

  <div class="calc-result" id="calc-result"></div>
</div>

<script>
(function () {
  var STORAGE_KEY = 'eso-coffer-calc-v2';

  function blankVendor() {
    return [
      {name: '', total: 6, unknown: 6},
      {name: '', total: 6, unknown: 6},
      {name: '', total: 6, unknown: 6},
      {name: '', total: 6, unknown: 6},
      {name: '', total: 6, unknown: 6},
      {name: '', total: 6, unknown: 6}
    ];
  }

  function setsFromNames(names) {
    return names.map(function (n) { return {name: n, total: 6, unknown: 6}; });
  }

  var FACTORY = {
    'Glirion the Redbeard': setsFromNames([
      'City of Ash',
      'Crypt of Hearts',
      'Frigid Crucible',
      'Sands and Madness',
      'Serpents and Sailors',
      'Winds and Webs'
    ]),
    'Maj al-Ragath': setsFromNames([
      'Banished Cells',
      'Darkshade Caverns',
      'Elden Hollow',
      'Fungal Grotto',
      'Spindleclutch',
      'Wayrest Sewers'
    ]),
    'Urgarlag Chief-bane': setsFromNames([
      'Ascending Tide',
      'Dragon Bones',
      'Fallen Banners',
      'Feast of Shadows',
      'Flames of Ambition',
      'Harrowstorm',
      'Horns of the Reach',
      'Imperial City',
      'Lost Depths',
      'Scalebreaker',
      'Scions of Ithelia',
      'Scribes of Fate',
      'Shadows of the Hist',
      'Stonethorn',
      'Waking Flame',
      'Wolfhunter',
      'Wrathstone'
    ])
  };

  var vendorEl = document.getElementById('calc-vendor');
  var tbody = document.getElementById('calc-sets');
  var result = document.getElementById('calc-result');
  var addBtn = document.getElementById('calc-add');
  var resetBtn = document.getElementById('calc-reset');

  var vendorOptions = Object.keys(FACTORY);

  var state = {
    activeVendor: vendorOptions[0],
    vendors: {}
  };

  function setupCustomSelect(el, options, onChange) {
    el.innerHTML = '';
    var valueSpan = document.createElement('span');
    valueSpan.className = 'calc-select-value';
    el.appendChild(valueSpan);

    var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('class', 'calc-select-arrow');
    arrow.setAttribute('viewBox', '0 0 12 8');
    arrow.setAttribute('aria-hidden', 'true');
    var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttribute('d', 'M1 1.5 L6 6.5 L11 1.5');
    arrowPath.setAttribute('stroke', 'currentColor');
    arrowPath.setAttribute('stroke-width', '1.6');
    arrowPath.setAttribute('fill', 'none');
    arrowPath.setAttribute('stroke-linecap', 'round');
    arrowPath.setAttribute('stroke-linejoin', 'round');
    arrow.appendChild(arrowPath);
    el.appendChild(arrow);

    var menu = document.createElement('ul');
    menu.className = 'calc-select-menu';
    menu.setAttribute('role', 'listbox');
    menu.hidden = true;
    options.forEach(function (opt) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('data-value', opt);
      li.textContent = opt;
      menu.appendChild(li);
    });
    el.appendChild(menu);

    var current = options[0];
    var highlighted = 0;

    function refresh() {
      valueSpan.textContent = current;
      el.dataset.value = current;
      Array.prototype.forEach.call(menu.children, function (li, i) {
        li.classList.toggle('selected', li.getAttribute('data-value') === current);
        li.classList.toggle('highlighted', i === highlighted);
      });
    }

    function setValue(v, fire) {
      var i = options.indexOf(v);
      if (i < 0) return;
      var changed = current !== v;
      current = v;
      highlighted = i;
      refresh();
      if (changed && fire && onChange) onChange(current);
    }

    function open() {
      highlighted = options.indexOf(current);
      menu.hidden = false;
      el.classList.add('open');
      el.setAttribute('aria-expanded', 'true');
      refresh();
    }
    function close() {
      menu.hidden = true;
      el.classList.remove('open');
      el.setAttribute('aria-expanded', 'false');
    }
    function toggle() { menu.hidden ? open() : close(); }

    el.addEventListener('mousedown', function (e) {
      if (menu.contains(e.target)) return;
      e.preventDefault();
      toggle();
      el.focus();
    });

    menu.addEventListener('mousedown', function (e) {
      var li = e.target.closest('li');
      if (!li) return;
      e.preventDefault();
      setValue(li.getAttribute('data-value'), true);
      close();
      el.focus();
    });

    menu.addEventListener('mousemove', function (e) {
      var li = e.target.closest('li');
      if (!li) return;
      var i = Array.prototype.indexOf.call(menu.children, li);
      if (i !== highlighted) {
        highlighted = i;
        Array.prototype.forEach.call(menu.children, function (item, idx) {
          item.classList.toggle('highlighted', idx === highlighted);
        });
      }
    });

    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (menu.hidden) {
          open();
        } else {
          setValue(options[highlighted], true);
          close();
        }
      } else if (e.key === 'Escape') {
        if (!menu.hidden) { e.preventDefault(); close(); }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (menu.hidden) { open(); return; }
        highlighted = (highlighted + 1) % options.length;
        refresh();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (menu.hidden) { open(); return; }
        highlighted = (highlighted - 1 + options.length) % options.length;
        refresh();
      } else if (e.key === 'Home') {
        if (!menu.hidden) { e.preventDefault(); highlighted = 0; refresh(); }
      } else if (e.key === 'End') {
        if (!menu.hidden) { e.preventDefault(); highlighted = options.length - 1; refresh(); }
      } else if (e.key === 'Tab') {
        close();
      }
    });

    el.addEventListener('blur', function () {
      setTimeout(close, 120);
    });

    document.addEventListener('mousedown', function (e) {
      if (!el.contains(e.target)) close();
    });

    setValue(options[0], false);
    return {
      setValue: function (v) { setValue(v, false); },
      getValue: function () { return current; }
    };
  }

  var vendorWidget = setupCustomSelect(vendorEl, vendorOptions, function (v) {
    state.activeVendor = v;
    saveState();
    render();
  });

  function cloneSets(arr) {
    return arr.map(function (s) { return {name: s.name, total: s.total, unknown: s.unknown}; });
  }

  function factoryFor(vendor) {
    return FACTORY[vendor] ? cloneSets(FACTORY[vendor]) : blankVendor();
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var d = JSON.parse(raw);
      if (d && typeof d.activeVendor === 'string' && FACTORY[d.activeVendor]) {
        state.activeVendor = d.activeVendor;
      }
      if (d && d.vendors && typeof d.vendors === 'object') {
        Object.keys(FACTORY).forEach(function (v) {
          var stored = d.vendors[v];
          if (Array.isArray(stored)) {
            state.vendors[v] = stored.map(function (s) {
              return {
                name: typeof s.name === 'string' ? s.name : '',
                total: Number.isFinite(parseInt(s.total, 10)) ? parseInt(s.total, 10) : 0,
                unknown: Number.isFinite(parseInt(s.unknown, 10)) ? parseInt(s.unknown, 10) : 0
              };
            });
          }
        });
      }
    } catch (e) {}
  }

  function ensureVendorState() {
    Object.keys(FACTORY).forEach(function (v) {
      if (!state.vendors[v]) state.vendors[v] = factoryFor(v);
    });
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function sets() {
    return state.vendors[state.activeVendor];
  }

  function fmt(x, dp) {
    if (dp == null) dp = 2;
    var p = Math.pow(10, dp);
    return (Math.round(x * p) / p).toString();
  }
  function pct(x) {
    return (Math.round(x * 1000) / 10).toString() + '%';
  }
  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render() {
    var s = sets();
    tbody.innerHTML = '';
    s.forEach(function (row, i) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><input type="text" placeholder="Set name" data-i="' + i + '" data-k="name" value="' + escapeAttr(row.name) + '"></td>' +
        '<td class="col-num"><input type="number" data-i="' + i + '" data-k="total" min="1" value="' + row.total + '"></td>' +
        '<td class="col-num"><input type="number" data-i="' + i + '" data-k="unknown" min="0" value="' + row.unknown + '"></td>' +
        '<td class="col-pct p-cell"></td>' +
        '<td><button type="button" class="rm" data-i="' + i + '" aria-label="Remove row">×</button></td>';
      tbody.appendChild(tr);
    });
    compute();
  }

  function compute() {
    var s = sets();
    var totalN = 0, totalU = 0, bestI = -1, bestP = -1, valid = true;
    var rows = tbody.children;
    s.forEach(function (row) {
      var t = parseInt(row.total, 10);
      var u = parseInt(row.unknown, 10);
      if (!Number.isFinite(t) || !Number.isFinite(u) || t < 1 || u < 0 || u > t) {
        valid = false;
        return;
      }
      totalN += t;
      totalU += u;
    });
    s.forEach(function (row, i) {
      var cell = rows[i] && rows[i].querySelector('.p-cell');
      if (!cell) return;
      var t = parseInt(row.total, 10);
      var u = parseInt(row.unknown, 10);
      if (!Number.isFinite(t) || !Number.isFinite(u) || t < 1 || u < 0 || u > t) {
        cell.textContent = '—';
        cell.classList.remove('best');
        return;
      }
      var p = u / t;
      cell.textContent = pct(p);
      if (p > bestP) { bestP = p; bestI = i; }
    });
    Array.prototype.forEach.call(rows, function (rowEl, i) {
      var cell = rowEl.querySelector('.p-cell');
      if (cell) cell.classList.toggle('best', i === bestI && bestP > 0 && s.length > 1);
    });
    if (!valid || s.length === 0 || totalN < 1) {
      result.innerHTML = '<p class="invalid">Fill in at least one set with 0 ≤ unknown ≤ total.</p>';
      return;
    }
    // Strict math:
    // E_mystery = U * (1 - ((N-1)/N)^8)  — expected distinct new pieces from 8 pulls
    // P_mystery = 1 - (1 - U/N)^8        — probability of at least one new across 8 pulls
    var perPieceHit = 1 - Math.pow((totalN - 1) / totalN, 8);
    var Emystery = totalU * perPieceHit;
    var Pmystery = 1 - Math.pow(1 - (totalU / totalN), 8);
    var bestName = (s[bestI] && s[bestI].name) ? s[bestI].name : 'best set';
    var verdict;
    if (totalU === 0) {
      verdict = 'You already own everything from this vendor.';
    } else if (Math.abs(Emystery - bestP) < 1e-9) {
      verdict = 'Mystery and the best curated are roughly equivalent.';
    } else if (Emystery > bestP) {
      verdict = 'Mystery coffers (1 key each) are the better buy.';
    } else {
      verdict = 'Curated coffer of <strong>' + escapeAttr(bestName) + '</strong> is the better buy.';
    }
    result.innerHTML =
      '<div class="calc-result-total">Total pool: <strong>' + totalN + '</strong> pieces, <strong>' + totalU + '</strong> still unknown</div>' +
      '<div class="calc-result-section">' +
        '<h4>8 keys on mystery coffers · 8 pulls</h4>' +
        '<dl>' +
          '<dt>Expected new pieces</dt><dd>' + fmt(Emystery) + '</dd>' +
          '<dt>Chance of ≥1 new piece</dt><dd>' + pct(Pmystery) + '</dd>' +
        '</dl>' +
      '</div>' +
      '<div class="calc-result-section">' +
        '<h4>8 keys on best curated · 1 pull</h4>' +
        '<dl>' +
          '<dt>Best bet</dt><dd>' + escapeAttr(bestName) + '</dd>' +
          '<dt>Chance of a new piece</dt><dd>' + pct(bestP) + '</dd>' +
        '</dl>' +
      '</div>' +
      '<div class="calc-result-verdict">' + verdict + '</div>';
  }

  tbody.addEventListener('input', function (e) {
    var t = e.target;
    var i = parseInt(t.getAttribute('data-i'), 10);
    var k = t.getAttribute('data-k');
    if (!Number.isFinite(i) || !k) return;
    var s = sets();
    if (k === 'name') {
      s[i].name = t.value;
    } else {
      var v = parseInt(t.value, 10);
      s[i][k] = Number.isFinite(v) ? v : 0;
    }
    compute();
    saveState();
  });

  tbody.addEventListener('click', function (e) {
    if (!e.target.classList.contains('rm')) return;
    var i = parseInt(e.target.getAttribute('data-i'), 10);
    if (Number.isFinite(i)) {
      sets().splice(i, 1);
      render();
      saveState();
    }
  });

  addBtn.addEventListener('click', function () {
    sets().push({name: '', total: 6, unknown: 6});
    render();
    saveState();
  });

  resetBtn.addEventListener('click', function () {
    state.vendors[state.activeVendor] = factoryFor(state.activeVendor);
    render();
    saveState();
  });

  loadState();
  ensureVendorState();
  vendorWidget.setValue(state.activeVendor);
  render();
})();
</script>
