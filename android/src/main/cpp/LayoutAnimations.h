#pragma once

#include <fbjni/fbjni.h>
#include <jsi/jsi.h>
#include <memory>
#include <string>
#include "JNIHelper.h"

namespace reanimated {

using namespace facebook::jni;
using namespace facebook;

class LayoutAnimations : public jni::HybridClass<LayoutAnimations> {
  using AnimationStartingBlock =
      std::function<void(int, int, alias_ref<JMap<jstring, jstring>>)>;
  using HasAnimationBlock = std::function<bool(int, int)>;
  using ClearAnimationConfigBlock = std::function<void(int)>;
  using CancelAnimationBlock =
      std::function<void(int, int, jboolean, jboolean)>;
  using FindPrecedingViewTagForTransitionBlock = std::function<int(int)>;
  using ComputeSharedTransitionProgressAnimationForTagBlock =
      std::function<jni::local_ref<JMap<JString, JObject>>(
          const int,
          const double,
          const jni::alias_ref<JMap<JString, JObject>>)>;

 public:
  static auto constexpr kJavaDescriptor =
      "Lcom/swmansion/reanimated/layoutReanimation/LayoutAnimations;";
  static jni::local_ref<jhybriddata> initHybrid(
      jni::alias_ref<jhybridobject> jThis);
  static void registerNatives();

  void startAnimationForTag(
      int tag,
      int type,
      alias_ref<JMap<jstring, jstring>> values);
  bool hasAnimationForTag(int tag, int type);
  bool isLayoutAnimationEnabled();

  void setAnimationStartingBlock(AnimationStartingBlock animationStartingBlock);
  void setHasAnimationBlock(HasAnimationBlock hasAnimationBlock);
  void setClearAnimationConfigBlock(
      ClearAnimationConfigBlock clearAnimationConfigBlock);
  void setCancelAnimationForTag(CancelAnimationBlock cancelAnimationBlock);
  void setFindPrecedingViewTagForTransition(
      FindPrecedingViewTagForTransitionBlock
          findPrecedingViewTagForTransitionBlock);
  void setComputeSharedTransitionProgressAnimationForTag(
      ComputeSharedTransitionProgressAnimationForTagBlock
          computeSharedTransitionProgressAnimationForTagBlock);

  void progressLayoutAnimation(
      int tag,
      const jni::local_ref<JNIHelper::PropsMap> &updates,
      bool isSharedTransition);
  void endLayoutAnimation(int tag, bool cancelled, bool removeView);
  void clearAnimationConfigForTag(int tag);
  void cancelAnimationForTag(
      int tag,
      int type,
      jboolean cancelled,
      jboolean removeView);
  int findPrecedingViewTagForTransition(int tag);
  jni::local_ref<JMap<JString, JObject>>
  computeSharedTransitionProgressAnimationForTag(
      const int viewTag,
      const double progress,
      const jni::alias_ref<JMap<JString, JObject>> snapshotValues);

 private:
  friend HybridBase;
  jni::global_ref<LayoutAnimations::javaobject> javaPart_;
  AnimationStartingBlock animationStartingBlock_;
  HasAnimationBlock hasAnimationBlock_;
  ClearAnimationConfigBlock clearAnimationConfigBlock_;
  CancelAnimationBlock cancelAnimationBlock_;
  FindPrecedingViewTagForTransitionBlock
      findPrecedingViewTagForTransitionBlock_;
  ComputeSharedTransitionProgressAnimationForTagBlock
      computeSharedTransitionProgressAnimationForTagBlock_;

  explicit LayoutAnimations(
      jni::alias_ref<LayoutAnimations::jhybridobject> jThis);
};

}; // namespace reanimated
