## 2024-03-21 - Input Slider Labels

**Learning:** When using `<input type="range">` elements, developers often place raw text spans near the slider to indicate what it is (e.g., "Min" or "Max") instead of a proper `<label>`. This causes the screen reader to only announce "slider", leaving visually impaired users guessing its purpose.
**Action:** Always provide an explicit `aria-label` (e.g., `aria-label="Minimum Target Glucose"`) on raw input sliders that are visually labeled by disconnected elements to ensure full screen reader support.