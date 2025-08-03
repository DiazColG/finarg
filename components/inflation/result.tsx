import NumberFlow from "@number-flow/react";
type InflationResultType = {
  startDate: string;
  endDate: string;
  startValue: number;
  endValue: number;
  totalIncrement: number;
  totalIncrementPercentage: number;
  monthlyAveragePercentage: number;
  annualizedPercentage: number;
};
export function InflationResult({
  totalIncrement,
  totalIncrementPercentage,
  monthlyAveragePercentage,
  annualizedPercentage,
}: InflationResultType) {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:shadow-lg transition-all">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
            Incremento Total
          </p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            <NumberFlow
              value={totalIncrementPercentage}
              locales="es-AR"
              format={{
                style: "percent",
                signDisplay: "always",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }}
            />{" "}
            <span className="text-slate-500 dark:text-slate-400 text-xl font-normal ml-1">
              <NumberFlow
                value={totalIncrement}
                locales="es-AR"
                format={{ style: "currency", currency: "ARS" }}
              />
            </span>
          </p>
        </div>

        <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:shadow-lg transition-all">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
            Incremento Mensual Promedio
          </p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            <NumberFlow
              value={monthlyAveragePercentage}
              locales="es-AR"
              format={{
                style: "percent",
                maximumFractionDigits: 2,
                signDisplay: "always",
              }}
            />
          </p>
        </div>

        <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:shadow-lg transition-all">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
            Incremento Anualizado
          </p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            <NumberFlow
              value={annualizedPercentage}
              locales="es-AR"
              format={{
                style: "percent",
                maximumFractionDigits: 2,
                signDisplay: "always",
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
