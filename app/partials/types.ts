// IMPORTS -
import { Billboard, Category, Color, Image, Product, Size, Store } from "@prisma/client";

// MODAL PROPS -
export type ModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

// HYDRATE PROPS -
export type hydrateProps = {
  children: React.ReactNode;
};

// USE-STORE-MODAL
export type useStoreProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// DASHBOARD PAGE PROPS -
export type dashboardProps = {
  params: { storeId: string };
};

// SETTINGS PAGE PROPS -
export type SettingsProps = {
  params: {
    storeId: string;
  };
};

// SETTINGS FORM PROPS -
export type SettingFormProps = {
  initialData: Store;
};

// BILL BOARD FORM PROPS -
export type BillboardFormProps = {
  initialData: Billboard | null;
};

// SIZE FORM PROPS -
export type SizeFormProps = {
  initialData: Size | null;
};

// COLOR FORM PROPS -
export type ColorFormProps = {
  initialData: Color | null;
};

// PRODUCT FORM PROPS -
export type ProductFormProps = {
  initialData: Product & {
    images: Image[]
  } | null;
  categories: Category[],
  color: Color[],
  sizes: Size[]
}

export type CategoryFormProps = {
  initialData: Category | null;
  billboards: Billboard[]
};

// HEADING PROPS -
export type HeadingProps = {
  title: string;
  description: string;
};

// ALERT MODAL -
export type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};
