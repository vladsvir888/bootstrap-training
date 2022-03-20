const tooltipElement1 = document.getElementById('tooltip1');
new bootstrap.Tooltip(tooltipElement1, {
  template: `
  <div class="tooltip" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-head">
      <i class="bi bi-info-square"></i>
      Important Info
    </div>
    <div class="tooltip-inner"></div>
  </div>
  `,
  placement: 'right',
});

const tooltipElement2 = document.getElementById('tooltip2');
new bootstrap.Tooltip(tooltipElement2, {
  template: `
  <div class="tooltip" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-head">
      <i class="bi bi-info-square"></i>
      Important Info
    </div>
    <div class="tooltip-inner"></div>
  </div>
  `,
  placement: 'top',
});

const tooltipElement3 = document.getElementById('tooltip3');
new bootstrap.Tooltip(tooltipElement3, {
  template: `
  <div class="tooltip" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-head">
      <i class="bi bi-info-square"></i>
      Important Info
    </div>
    <div class="tooltip-inner"></div>
  </div>
  `,
  placement: 'left',
});

const tooltipElement4 = document.getElementById('tooltip4');
new bootstrap.Tooltip(tooltipElement4, {
  template: `
  <div class="tooltip" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-head">
      <i class="bi bi-info-square"></i>
      Important Info
    </div>
    <div class="tooltip-inner"></div>
  </div>
  `,
  placement: 'bottom',
});
