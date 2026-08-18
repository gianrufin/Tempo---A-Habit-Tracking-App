import React, { useState } from 'react';
import {
  X,
  Download,
  Smartphone,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles,
  RefreshCw,
  GitBranch,
  FileText,
} from 'lucide-react';
import { CURRENT_APP_VERSION, DEFAULT_GITHUB_REPO } from '../../domain/updaterService';

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettingsUpdates?: () => void;
}

export const ReadmeModal: React.FC<ReadmeModalProps> = ({
  isOpen,
  onClose,
  onOpenSettingsUpdates,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  if (!isOpen) return null;

  const directApkUrl = `https://github.com/${DEFAULT_GITHUB_REPO}/releases/latest/download/tempo-android-release.apk`;
  const githubReleasesUrl = `https://github.com/${DEFAULT_GITHUB_REPO}/releases`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directApkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectDownload = async () => {
    setDownloading(true);
    setDownloadProgress(15);

    for (let p = 20; p <= 100; p += 20) {
      await new Promise(r => setTimeout(r, 80));
      setDownloadProgress(p);
    }

    // Trigger direct APK download in browser / mobile
    const a = document.createElement('a');
    a.href = directApkUrl;
    a.download = `tempo-v${CURRENT_APP_VERSION}.apk`;
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloading(false);
      setDownloadProgress(0);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#120b24] border border-purple-500/30 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-purple-950/60">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#170e2e]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-900/60 border border-purple-400/30 text-amber-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Tempo Readme & APK Download
                <span className="text-[10px] font-mono font-normal text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-500/30">
                  v{CURRENT_APP_VERSION}
                </span>
              </h2>
              <p className="text-xs text-zinc-400">Project documentation & direct Android APK installation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {/* Direct APK Download Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-950/80 via-[#1e1338] to-[#120924] border border-amber-500/40 space-y-3.5 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] flex items-center justify-center shadow-md shadow-emerald-950/50 shrink-0">
                  <div className="w-full h-full bg-[#0d0718] rounded-[14px] flex items-center justify-center text-emerald-400">
                    <Smartphone className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    Direct Android APK Download
                  </h3>
                  <p className="text-xs text-zinc-400">Official release package • Built for Android 8.0 to 15+</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified APK
                </span>
                <span className="text-[11px] font-mono text-amber-300 bg-amber-950/80 px-2 py-1 rounded-lg border border-amber-500/30">
                  ~15 MB
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
              <button
                type="button"
                id="btn-readme-direct-apk"
                disabled={downloading}
                onClick={handleDirectDownload}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-[0.99] transition-all"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? `Downloading (${downloadProgress}%)...` : 'Download APK Directly'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="py-3 px-3.5 rounded-xl bg-[#23173f] hover:bg-[#2e1f54] text-zinc-200 hover:text-white border border-purple-500/30 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                title="Copy Direct Download Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-300" />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <a
                href={githubReleasesUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3.5 rounded-xl bg-[#23173f] hover:bg-[#2e1f54] text-zinc-200 hover:text-white border border-purple-500/30 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-amber-300" />
                <span>GitHub Releases</span>
              </a>
            </div>

            {/* Direct link preview */}
            <div className="p-2.5 bg-black/50 rounded-xl border border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 overflow-hidden">
              <span className="truncate pr-2">{directApkUrl}</span>
            </div>
          </div>

          {/* Quick Installation Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              How to Install APK on Android
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl space-y-1">
                <span className="text-xs font-bold text-purple-300">Step 1</span>
                <p className="text-xs text-zinc-300">Tap <strong>Download APK Directly</strong> above or open the download link.</p>
              </div>
              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl space-y-1">
                <span className="text-xs font-bold text-purple-300">Step 2</span>
                <p className="text-xs text-zinc-300">Open the downloaded file. Enable <em>Allow from this source</em> if prompted.</p>
              </div>
              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl space-y-1">
                <span className="text-xs font-bold text-purple-300">Step 3</span>
                <p className="text-xs text-zinc-300">Tap <strong>Install</strong> to start building your daily tempo streaks!</p>
              </div>
            </div>
          </div>

          {/* Key Features Overview */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              Key Features & Updates
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Ascending Habit Order (Morning to Evening):</span>
                  <p className="text-zinc-400 mt-0.5">
                    Habits and routines sequence from Morning (8:00 AM) through Afternoon (1:00 PM), Evening (6:00 PM), and Night (9:30 PM).
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">In-App OTA Auto-Updater:</span>
                  <p className="text-zinc-400 mt-0.5">
                    Directly check for new GitHub releases in Settings, download the update package, and install updates without exiting the app.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#18102e] border border-purple-500/20 rounded-xl flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Focus Chamber & Synthesizer:</span>
                  <p className="text-zinc-400 mt-0.5">
                    Custom Web Audio chime frequencies (Golden Hour, Aura Ping, Crystal Fizz) with Pomodoro intervals and stopwatch modes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Source & Build Commands */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5" />
              Build From Source (Gradle)
            </h3>
            <pre className="p-3 bg-[#0d0718] border border-purple-500/20 rounded-xl text-[11px] font-mono text-zinc-300 overflow-x-auto">
              <code>{`# Android APK build
./gradlew assembleRelease

# Web App build
npm run build`}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-500/20 bg-[#170e2e] flex items-center justify-between">
          <span className="text-xs text-zinc-400">Tempo • Open Source Habit Tracker</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
