import styled from "styled-components";
import { IoMdNotifications } from "react-icons/io";
import colors from "../styles/colors";

export const Notification = styled(IoMdNotifications)`
  color: ${colors.lighter};
  font-size: 1.2rem;
  margin: 0 1rem;
`;
