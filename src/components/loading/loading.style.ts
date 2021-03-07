import styled from "styled-components";

interface ISpinner {
  size?: string;
}

const Spinner = styled.div<ISpinner>`
  display: block;
  margin-top: ${(props) => (props.size === "large" ? "4em" : "2em")};
  margin-right: auto;
  margin-left: auto;
  width: 4em;
  height: 4em;
  padding: 7px;
  transform: ${(props) =>
    props.size === "large" ? "scale(1.5)" : "scale(0.7)"};
`;

const Wrapper = styled.div`
  position: relative;
  width: 4em;
  height: 4em;
  border-radius: 100%;
  left: calc(50% - 2em);

  &::after {
    content: "";
    background: white;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    position: absolute;
    top: 0.5em;
    left: 0.5em;
  }
`;

const Rotator = styled.div`
  position: relative;
  width: 4em;
  border-radius: 4em;
  overflow: hidden;
  animation: rotate 2000ms infinite linear;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: blue;
    border: 3px solid white;
    border-radius: 100%;
  }
`;

const InnerSpin = styled.div`
  background: white;
  height: 4em;
  width: 2em;
  animation: rotate-left 2500ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 2em 0 0 2em;
  transform-origin: 2em 2em;

  &:last-child {
    animation: rotate-right 2500ms infinite
      cubic-bezier(0.445, 0.05, 0.55, 0.95);
    margin-top: -4em;
    border-radius: 0 2em 2em 0;
    float: right;
    transform-origin: 0 50%;
  }

  @keyframes rotate-left {
    60%,
    75%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-right {
    0%,
    25%,
    45% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Spinner, Wrapper, Rotator, InnerSpin };
