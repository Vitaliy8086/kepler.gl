import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export const SelectText = styled.span`
  color: ${props => props.theme.selectColor};
  font-size: ${props => props.theme.selectFontSize};
  font-weight: ${props => props.theme.selectFontWeight};

  i {
    font-size: 13px;
    margin-right: 6px;
  }
`;

export const SelectTextBold = SelectText.extend`
  font-weight: ${props => props.theme.selectFontWeightBold};
`;

export const IconRoundSmall = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${props =>
    props.theme.secondaryBtnBgdHover}; // updated after checking sketch file
  color: ${props => props.theme.secondaryBtnColor};
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.secondaryBtnBgdHover};
  }
`;

export const StyledSwitch = styled.div`
  margin-bottom: 0 !important;
  label {
    color: ${props => props.theme.secondaryBtnColor} !important;
    
    &:before {
      background: #282727 !important;
      border: 1px solid #232324 !important;  
    }
  }
  input {
    outline: none;
    :focus {
      outline: none;
  }
`;

export const PanelLabel = styled.label.attrs({
  className: 'side-panel-panel__label'
})`
  color: ${props => props.theme.labelColor};
  display: inline-block;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 4px;
  text-transform: capitalize;
`;

export const PanelLabelWrapper = styled.div.attrs({
  className: 'side-panel-panel__label-wrapper'
})`
  display: flex;
  align-items: self-start;
`;

export const SidePanelSection = styled.div.attrs({
  className: 'side-panel-section'
})`
  margin-bottom: 12px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
`;

export const SidePanelDivider = styled.div.attrs({
  className: 'side-panel-divider'
})`
  border-bottom: 1px solid ${props => props.theme.panelBorderColor};
  height: 12px;
  margin-bottom: 12px;
`;

export const Tooltip = styled(ReactTooltip)`
  &.__react_component_tooltip {
    font-size: 9.5px;
    font-weight: 500;
    padding: 7px 18px;

    &.type-dark {
      background-color: ${props => props.theme.tooltipBg};
      color: ${props => props.theme.tooltipColor};
      &.place-bottom {
        :after {
          border-bottom-color: ${props => props.theme.tooltipBg};
        }
      }

      &.place-top {
        :after {
          border-top-color: ${props => props.theme.tooltipBg};
        }
      }

      &.place-right {
        :after {
          border-right-color: ${props => props.theme.tooltipBg};
        }
      }

      &.place-left {
        :after {
          border-left-color: ${props => props.theme.tooltipBg};
        }
      }
    }
  }
`;

export const Button = styled.div.attrs({
  className: 'button'
})`
  align-items: center;
  background-color: ${props =>
    props.secondary
      ? props.theme.secondaryBtnBgd
      : props.link ? props.theme.linkBtnBgd : props.theme.primaryBtnBgd};
  border-radius: 2px;
  color: ${props =>
    props.secondary
      ? props.theme.secondaryBtnColor
      : props.link ? props.theme.linkBtnColor : props.theme.primaryBtnColor};
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => (props.large ? '14px' : '11px')};
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.3px;
  line-height: 14px;
  outline: 0;
  padding: ${props => (props.large ? '14px 32px' : '9px 12px')};
  text-align: center;
  transition: ${props => props.theme.transition};
  vertical-align: middle;
  width: ${props => props.width || 'auto'};

  :hover,
  :focus,
  :active {
    background-color: ${props =>
      props.secondary
        ? props.theme.secondaryBtnBgdHover
        : props.link
          ? props.theme.linkBtnActBgdHover
          : props.theme.primaryBtnBgdHover};
    color: ${props =>
      props.secondary
        ? props.theme.secondaryBtnActColor
        : props.link
          ? props.theme.linkBtnActColor
          : props.theme.primaryBtnActColor};
  }

  svg {
    margin-right: 8px;
  }
`;

export const Input = styled.input`
  ${props => props.theme.input};
`;

export const InlineInput = Input.extend`
  ${props => props.theme.inlineInput};
`;

export const StyledLayerConfigGroupHeader = styled.div.attrs({
  className: 'layer-config-group__header'
})`
  border-left: 2px solid ${props => props.theme.labelColor};
  color: ${props => props.theme.textColor};
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  margin-left: -12px;
  padding-left: 10px;
  text-transform: capitalize;
  letter-spacing: 0.2px;
`;

export const StyledLayerConfigGroup = styled.div.attrs({
  className: 'layer-config-group'
})`
  padding-left: 18px;
  margin-bottom: 18px;
`;
