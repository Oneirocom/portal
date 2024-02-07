type SettingsIconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export const SettingsIcon = ({
  className = "",
  width = 15,
  height = 16,
}: SettingsIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="settings">
        <path
          id="Vector"
          d="M24.3889 16.607C24.4389 16.207 24.4764 15.807 24.4764 15.382C24.4764 14.957 24.4389 14.557 24.3889 14.157L27.0264 12.0945C27.2639 11.907 27.3264 11.5695 27.1764 11.2945L24.6764 6.96946C24.5639 6.76946 24.3514 6.65696 24.1264 6.65696C24.0514 6.65696 23.9764 6.66946 23.9139 6.69446L20.8014 7.94446C20.1514 7.44446 19.4514 7.03196 18.6889 6.71946L18.2139 3.40696C18.1764 3.10696 17.9139 2.88196 17.6014 2.88196H12.6014C12.2889 2.88196 12.0264 3.10696 11.9889 3.40696L11.5139 6.71946C10.7514 7.03196 10.0514 7.45696 9.40139 7.94446L6.28889 6.69446C6.21389 6.66946 6.13889 6.65696 6.06389 6.65696C5.85139 6.65696 5.63889 6.76946 5.52639 6.96946L3.02639 11.2945C2.86389 11.5695 2.93889 11.907 3.17639 12.0945L5.81389 14.157C5.76389 14.557 5.72639 14.9695 5.72639 15.382C5.72639 15.7945 5.76389 16.207 5.81389 16.607L3.17639 18.6695C2.93889 18.857 2.87639 19.1945 3.02639 19.4695L5.52639 23.7945C5.63889 23.9945 5.85139 24.107 6.07639 24.107C6.15139 24.107 6.22639 24.0945 6.28889 24.0695L9.40139 22.8195C10.0514 23.3195 10.7514 23.732 11.5139 24.0445L11.9889 27.357C12.0264 27.657 12.2889 27.882 12.6014 27.882H17.6014C17.9139 27.882 18.1764 27.657 18.2139 27.357L18.6889 24.0445C19.4514 23.732 20.1514 23.307 20.8014 22.8195L23.9139 24.0695C23.9889 24.0945 24.0639 24.107 24.1389 24.107C24.3514 24.107 24.5639 23.9945 24.6764 23.7945L27.1764 19.4695C27.3264 19.1945 27.2639 18.857 27.0264 18.6695L24.3889 16.607ZM21.9139 14.4695C21.9639 14.857 21.9764 15.1195 21.9764 15.382C21.9764 15.6445 21.9514 15.9195 21.9139 16.2945L21.7389 17.707L22.8514 18.582L24.2014 19.632L23.3264 21.1445L21.7389 20.507L20.4389 19.982L19.3139 20.832C18.7764 21.232 18.2639 21.532 17.7514 21.7445L16.4264 22.282L16.2264 23.6945L15.9764 25.382H14.2264L13.7889 22.282L12.4639 21.7445C11.9264 21.5195 11.4264 21.232 10.9264 20.857L9.78889 19.982L8.46389 20.5195L6.87639 21.157L6.00139 19.6445L7.35139 18.5945L8.46389 17.7195L8.28889 16.307C8.25139 15.9195 8.22639 15.632 8.22639 15.382C8.22639 15.132 8.25139 14.8445 8.28889 14.4695L8.46389 13.057L7.35139 12.182L6.00139 11.132L6.87639 9.61946L8.46389 10.257L9.76389 10.782L10.8889 9.93196C11.4264 9.53196 11.9389 9.23196 12.4514 9.01946L13.7764 8.48196L13.9764 7.06946L14.2264 5.38196H15.9639L16.4014 8.48196L17.7264 9.01946C18.2639 9.24446 18.7639 9.53196 19.2639 9.90696L20.4014 10.782L21.7264 10.2445L23.3139 9.60696L24.1889 11.1195L22.8514 12.182L21.7389 13.057L21.9139 14.4695ZM15.1014 10.382C12.3389 10.382 10.1014 12.6195 10.1014 15.382C10.1014 18.1445 12.3389 20.382 15.1014 20.382C17.8639 20.382 20.1014 18.1445 20.1014 15.382C20.1014 12.6195 17.8639 10.382 15.1014 10.382ZM15.1014 17.882C13.7264 17.882 12.6014 16.757 12.6014 15.382C12.6014 14.007 13.7264 12.882 15.1014 12.882C16.4764 12.882 17.6014 14.007 17.6014 15.382C17.6014 16.757 16.4764 17.882 15.1014 17.882Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

