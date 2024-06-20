import { type SetupContext, type SlotsType } from 'vue';
import { ElButton, type ButtonEmits } from 'element-plus';
import 'element-plus/es/components/button/style/css';
import style from '@/shared/ui/BaseButton/BaseButton.module.scss';

// все ElButtonProps
type ElButtonProps = InstanceType<typeof ElButton>['$props'];

type PickedProps = Pick<ElButtonProps, 'onClick' | 'plain' | 'disabled'>;

// только props, которые компонент поддерживает по дизайн системе.
type Props = PickedProps & {
  // только определенные вариации 'type', которые компонент поддерживает по дизайн системе.
  type: Extract<ElButtonProps['type'], 'success' | 'primary'>;
};

// библиотека не раскрывает Slots, поэтому добавляем вручную, если требуется по дизайн системе.
// https://element-plus.org/en-US/component/button.html#button-slots
type Slots = SlotsType<{
  default: unknown;
  loading: unknown;
  icon: unknown;
}>;

export function BaseButton(props: Props, { slots }: SetupContext<ButtonEmits, Slots>) {
  return (
    <ElButton class={style.baseButton} {...props}>
      {slots}
    </ElButton>
  );
}

BaseButton.inheritAttrs = false;
