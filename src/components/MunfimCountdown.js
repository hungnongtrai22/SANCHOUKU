import { useLocales } from "../locales";
import { useCountdown } from "../useCountdown";

const MunfimCountdown = () => {
  const {t} = useLocales();
  // const [days, hours, minutes, seconds] = useCountdown(
  //   `${new Date().getMonth() + 1} ${
  //     new Date().getDate() + 20
  //   } , ${new Date().getFullYear()} 00:00:00`
  // );
  const targetDate = new Date(2026, 3, 1, 12, 0, 0); // tháng 0 = tháng 1
const [days, hours, minutes, seconds] = useCountdown(targetDate);


  return (
    <ul className="count-down mt-35">
      <li>
        <span id="days">{days > 9 ? days : `0${days}`}</span>{t('day')}
      </li>
      <li>
        <span id="hours">{hours > 9 ? hours : `0${hours}`}</span>{t('hour')}
      </li>
      <li>
        <span id="minutes">{minutes > 9 ? minutes : `0${minutes}`}</span>{t('minute')}
      </li>
      <li>
        <span id="seconds">{seconds > 9 ? seconds : `0${seconds}`}</span>{t('second')}
      </li>
    </ul>
  );
};
export default MunfimCountdown;
