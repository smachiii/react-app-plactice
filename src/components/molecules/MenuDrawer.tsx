import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo(
  ({ onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting }) => {
    return (
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button
                onClick={() => {
                  onClickHome();
                  onClose();
                }}
                w="100%"
              >
                TOP
              </Button>
              <Button
                onClick={() => {
                  onClickUserManagement();
                  onClose();
                }}
                w="100%"
              >
                ユーザー一覧
              </Button>
              <Button
                onClick={() => {
                  onClickSetting();
                  onClose();
                }}
                w="100%"
              >
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
);
